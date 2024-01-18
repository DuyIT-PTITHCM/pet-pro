// routes/checkinCheckoutRoute.js
import { Op } from 'sequelize';
import { models } from '../models/index.js';


export const totalDetail = async (req) => {
    var currentDate = new Date();
    var firstDate = currentDate.setDate(1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    var lastDate = currentDate.setDate(0);
    console.log(firstDate + " " + lastDate)
    const startDate = req.query.startDate || firstDate;
    const endDate = req.query.endDate || lastDate;
    const totalOrders = await models.Order.count({ where: { updatedAt: { [Op.between]: [startDate, endDate] } } });
    const checkIns = await models.UseService.findAll({
        where: {
            updatedAt: {
                [Op.between]: [startDate, endDate]
            }
        }
    });

    const totalCheckIns = checkIns.length; // Sử dụng thuộc tính length để đếm số phần tử trong mảng
    const checkOuts = checkIns.filter(x => x.isCheckout === true);
    const totalCheckOuts = checkOuts.length; // Sử dụng === để so sánh giá trị, và sử dụng length để đếm số phần tử trong mảng
    const totalCheckInAmount = checkIns.reduce((sum, checkIn) => sum + checkIn.totalPrice, 0);
    const totalCheckOutAmount = checkOuts.reduce((sum, checkOut) => sum + checkOut.totalPrice, 0);
    const totalEmployeesDateRange = await models.User.count({ where: { role: 'employer', updatedAt: { [Op.between]: [startDate, endDate] } } });
    const totalEmployees = await models.User.count({ where: { role: 'employer' } });
    const totalCustomers = await models.User.count({ where: { role: 'customer' } });
    const totalCustomersDateRange = await models.User.count({ where: { role: 'customer', updatedAt: { [Op.between]: [startDate, endDate] } } });
    const totalOrderAmount = await models.Order.sum('total', { where: { updatedAt: { [Op.between]: [startDate, endDate] } } });
    const totalOrderSuccessAmount = await models.Order.sum('total', { where: { updatedAt: { [Op.between]: [startDate, endDate] }, status: 'Completed' } });
    
    const services = await models.Post.findAll({
        include: [{
            model: models.Categories,
            as: 'category',
            where: { type: 'service' }
        }],
    });
    const totalServices = services.length;
    const totalActiveServices = services.filter(x => x.isActive === true).length;
    // const totalActiveServices = await models.Post.count({
    //     include: [{
    //         model: models.Categories,
    //         where: { type: 'service' }
    //     }],
    //     where: { isActive: true }
    // });

    const totalPetsDateRange = await models.Product.count({ where: { type: 'pet', updatedAt: { [Op.between]: [startDate, endDate] } } });
    const totalPets = await models.Product.count({ where: { type: 'pet' } });
    const totalAccessories = await models.Product.count({ where: { type: 'accessory', updatedAt: { [Op.between]: [startDate, endDate] } } });
    const result = {
        totalOrders: totalOrders,
        totalCheckIns: totalCheckIns,
        totalCheckOuts: totalCheckOuts,
        totalEmployeesDateRange: totalEmployeesDateRange,
        totalEmployees: totalEmployees,
        totalCustomers: totalCustomers,
        totalCustomersDateRange: totalCustomersDateRange,
        totalOrderAmount: totalOrderAmount,
        totalOrderSuccessAmount: totalOrderSuccessAmount,
        totalActiveServices: totalActiveServices,
        totalServices: totalServices,
        totalPetsDateRange: totalPetsDateRange,
        totalPets: totalPets,
        totalAccessories: totalAccessories,
        totalCheckInAmount: totalCheckInAmount,
        totalCheckOutAmount: totalCheckOutAmount
    }
    return result;
}