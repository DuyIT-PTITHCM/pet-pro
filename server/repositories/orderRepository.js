import { Op, Sequelize } from 'sequelize';
import { models } from '../models/index.js';
import paypal from 'paypal-rest-sdk';
import { generateRandomCode } from '../utils/ramdomCode.js';
import fs from 'fs';
import { sendEmailService } from '../lib/nodemailerService.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_API = 'http://localhost:3000/api/v1.0/';
const checkTemplate = (template) => {
    return fs.readFileSync(path.resolve(__dirname, `../templates/${template}.html`), 'utf-8').toString()
}
export const getAllOrders = async (page = 1, perPage = 10, filters = {}) => {
    try {
        const { docs, pages, total } = await models.Order.paginate({
            where: {
                ...filters,
            },
            page,
            paginate: perPage,
            order: [['createDate', 'DESC']],
            include: [
                {
                    model: models.OrderItem,
                    as: 'orderItems',
                    include: [
                        {
                            model: models.Product,
                            as: 'product',
                            attributes: { exclude: ['notes'] }
                        },
                    ]
                },
            ]
        });

        return { docs, pages, total };
    } catch (error) {
        throw new Error("Error fetching order: " + error.message);
    }
};

export const getOrderDetail = async (code) => {
    return await models.Order.findOne({
        where: {
            code: code,
        },
        include: [
            {
                model: models.OrderItem,
                as: 'orderItems',
                include: [
                    {
                        model: models.Product,
                        as: 'product'
                    },
                ]
            },
        ]
    });
}

export const createOrder = async (newOrder, userid) => {
    const {
        orderInfo, products
    } = newOrder;
    const orderDetail = await updatePrice(products);
    let oderSuccess = null;
    const newCode = generateRandomCode(6);
    let transaction;
    try {
        transaction = await models.sequelize.transaction();
        const order = await models.Order.create({
            code: newCode,
            reciverName: orderInfo.reciverName,
            reciverEmail: orderInfo.reciverEmail,
            reciverPhone: orderInfo.reciverPhoneNumber,
            reciverAddress: orderInfo.reciverAddress,
            note: orderInfo.reciverNote,
            payment: orderInfo.payment,
            total: orderDetail.totalOrder,
            userId: userid,
        }, { transaction });
        orderDetail.listOrderItem.forEach(item => item.orderId = order.id);
        await models.OrderItem.bulkCreate(orderDetail.listOrderItem, { transaction });
        await transaction.commit();
        oderSuccess = await models.Order.findOne({
            where: {
                id: order.id,
            },
            include: [
                {
                    model: models.OrderItem,
                    as: 'orderItems',
                    include: [
                        {
                            model: models.Product,
                            as: 'product'
                        },
                    ]
                },
            ]
        });

    } catch (error) {
        if (transaction) {
            await transaction.rollback();
        }
        throw new Error("Creat order failed: " + error.message);
    }
    try {
        const htmlTemplate = checkTemplate('orderConfirm');
        console.log(htmlTemplate)

        // Replace placeholders with actual values
        const html = htmlTemplate
            .replace('{customer}', oderSuccess.reciverName)
            .replace('{code}', oderSuccess.code)
            .replace('{reciverName}', oderSuccess.reciverName)
            .replace('{reciverAddress}', oderSuccess.reciverAddress)
            .replace('{reciverEmail}', oderSuccess.reciverEmail)
            .replace('{reciverPhone}', oderSuccess.reciverPhoneNumber)
            .replace('{total}', oderSuccess.total)
            .replace('{orderDetail}', 'http://localhost:5173/order/' + oderSuccess.code)
            .replace('{thankYouMessage}', "thanks");
        console.log(html)
        console.log(oderSuccess.reciverEmail + "Order " + oderSuccess.code + " information")
        sendEmailService(oderSuccess.reciverEmail, "Order " + oderSuccess.code + " information", html);
    } catch (error) {
        console.log(error)
    }
    if (orderInfo.payment == 'Paypal') {
        const paymentResult = await paypalCreatePayment(orderDetail.listOrderItem, orderDetail.totalOrder, oderSuccess.id);
        return paymentResult;
    }
    else {
        return oderSuccess;
    }
};

export const updateStatus = async (orderId, status) => {
    const order = await models.Order.findOne({
        where: {
            id: orderId
        },
        include: [
            {
                model: models.OrderItem,
                as: 'orderItems',
            },
        ]
    });
    if (!order) {
        throw new Error("Order not found");
    }
    if (order.status == status) {
        return Promise.resolve(order);
    }
    if (order.status != status && (status == "Returned" || status == "Canceled")) {
        for (var element of order.orderItems) {
            const pro = await models.Product.findByPk(element.productId);
            if (pro) {
                await pro.update({
                    stockQuantity: pro.stockQuantity + element.quantity,
                });
            } else {
                throw new Error("Product Invalid");
            }
        }
    }
    await order.update({
        status: status,
    });
    return Promise.resolve(order);
}

export const executePayment = async (req) => {
    console.log("call success nef")
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
    const orderId = req.query.orderId;
    const order = await models.Order.findOne({
        where: {
            id: orderId
        },
        include: [
            {
                model: models.OrderItem,
                as: 'orderItems',
                include: [
                    {
                        model: models.Product,
                        as: 'product'
                    },
                ]
            },
        ]
    });
    if (!order) {
        throw new Error("Order Id invalid");
    }
    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": order.total
            }
        }]
    };
    return new Promise((resolve, reject) => {
        paypal.payment.execute(paymentId, execute_payment_json, async function (error, payment) {
            if (error) {
                await order.update({
                    paymentStatus: error.message,
                });
                reject(error);
                throw new Error(error);
            } else {
                await order.update({
                    paymentStatus: "Success",
                });
                resolve(order);
                return;
            }
        });
    })
}

async function updatePrice(products) {
    var totalOrder = 0;
    var listOrderItem = [];
    for (const element of products) {
        var pro = await models.Product.findByPk(element.id);
        if (pro) {
            totalOrder += (pro.price - ((pro.price * pro.discount) / 100)) * element.qty;
            listOrderItem.push({
                orderId: 0,
                productId: pro.id,
                productName: pro.productName,
                price: pro.price - (pro.price * pro.discount) / 100,
                quantity: element.qty
            });
            pro.stockQuantity -= element.qty;
            await pro.save();
        } else {
            throw new Error("Product Invalid");
        }
    }
    return { totalOrder, listOrderItem };
}

async function paypalCreatePayment(items, total, orderId) {
    let listItem = items.map(element => {
        return {
            "name": element.productName,
            "sku": "001",
            "currency": "USD",
            "price": element.price,
            "quantity": element.quantity
        };
    });
    const create_payment_json = {
        intent: "sale",
        payer: {
            "payment_method": "paypal"
        },
        redirect_urls: {
            return_url: "http://localhost:5173/payment?orderId=" + orderId,
            cancel_url: "http://localhost:5173/"
        },
        transactions: [{
            item_list: {
                "items": listItem
            },
            amount: {
                currency: "USD",
                total: total
            },
            description: "Pet one create payment for order " + orderId + " at " + Date.now().toString()
        }]
    };
    try {
        return new Promise((resolve, reject) => {
            paypal.payment.create(create_payment_json, function (error, payment) {
                if (error) {
                    console.error("Error creating PayPal payment");
                    console.error(error);
                    reject(error);
                } else {
                    for (let i = 0; i < payment.links.length; i++) {
                        if (payment.links[i].rel === 'approval_url') {
                            const url = payment.links[i].href;
                            resolve(url);
                            return; // Đảm bảo chỉ gọi resolve một lần
                        }
                    }
                    reject("No approval URL found in PayPal payment response");
                }
            });
        });
    }
    catch (error) {
        console.log(error)
        throw new Error(error);
    }
}
