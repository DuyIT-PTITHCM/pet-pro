import { validationResult } from "express-validator";
import { coreResponse } from "../lib/coreResponse.js";
import jwt from 'jsonwebtoken';
import { showDetail } from "../repositories/userRepository.js";
import { createOrder, executePayment, getAllOrders, getOrderDetail, updateStatus } from "../repositories/orderRepository.js";
import { sendEmailService } from "../lib/nodemailerService.js";

const PER_PAGE = 10;
export const index = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const size = req.query.pageSize || PER_PAGE;

        let filters = {
            payment: req.query.payment,
            status: req.query.status,
            paymentStatus: req.query.paymentStatus
        };

        filters = Object.entries(filters).reduce((acc, [key, value]) => {
            if (value !== null && value !== undefined && !(value instanceof Object && Object.keys(value).length === 0)) {
                acc[key] = value;
            }
            return acc;
        }, {});
        const currentPage = parseInt(page);

        const { docs, pages, total } = await getAllOrders(page, size, filters);
        coreResponse(res, 200, "Success", { docs, pages, total, currentPage });
    } catch (error) {
        coreResponse(res, 500, "Error fetching order" + error.message);
    }
};

export const create = async (req, res) => {
    try {
        var userId = null;
        const authHeader = req.header('Authorization');
        if (authHeader) {
            console.log("authHeader")
            const [bearer, token] = authHeader.split(' ');
            if (token) {
                console.log("token" + token)

                try {
                    const SECRET_KEY = process.env.SECRET_KEY;
                    const decoded = jwt.verify(token, SECRET_KEY);
                    const id = decoded.userId;
                    var user = await showDetail(id);
                    if (user) {
                        userId = id;
                    }
                    else {
                        return res.status(401).json({ message: 'Invalid token' + error.message });
                    }
                } catch (error) {
                    return res.status(401).json({ message: 'Invalid token' + error.message });
                }
            }
            else {
                console.log("not token")
                return res.status(401).json({ message: 'Invalid token' + error.message });
            }
        }
        const data = await createOrder(req.body, userId);
        coreResponse(res, 200, "Success", data);
    } catch (error) {
        coreResponse(res, 500, "Create order failed", error.message);
    }
};

export const orderDetail = async (req, res) => {
    try {
        var code = req.params.code;
        const data = await getOrderDetail(code);
        coreResponse(res, 200, "Success", data);
    } catch (error) {
        coreResponse(res, 500, "Get order failed", error.message);
    }
};

export const update = async (req, res) => {
    try {
        var status = req.body.status;
        var orderId = req.params.id;
        const data = await updateStatus(orderId, status);
        coreResponse(res, 200, "Success", data);
    } catch (error) {
        coreResponse(res, 500, "Update order failed", error.message);
    }
};

export const execute = async (req, res) => {
    try {
        const data = await executePayment(req);
        coreResponse(res, 200, "Success", data);
    } catch (error) {
        coreResponse(res, 500, "Error execute payment", error.message);
    }
};

export const cancel = async (req, res) => {
    console.log("cancel rooif nef")
};

export const testSendMail = async (req, res) => {
    try {
        console.log(req.body.email, req.body.subject, req.body.body)
        const emailSender = sendEmailService(req.body.email, req.body.subject, req.body.body);
    console.log(emailSender)
    coreResponse(res, 200, "Test send mail", emailSender)
    } catch (error) {
        coreResponse(res, 500, error.message)
    }

};
