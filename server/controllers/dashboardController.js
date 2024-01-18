
import { Op } from "sequelize";
import { coreResponse } from "../lib/coreResponse.js";
import { models } from "../models/index.js";
import { totalDetail } from "../repositories/statisticalRepository.js";

export const index = async (req, res) => {
    try {
        var currentDate = new Date();
        var firstDate = currentDate.setDate(1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        var lastDate = currentDate.setDate(0);
        console.log(firstDate + " " + lastDate)
        const startDate = req.query.startDate || firstDate;
        const endDate = req.query.endDate || lastDate;
        const orderCounts = {};
        const statuses = ['Pending', 'Confirm', 'Processing', 'Shipping', 'Completed', 'Returned', 'Canceled'];

        // Đếm số đơn hàng cho mỗi trạng thái
        for (const status of statuses) {
            const count = await models.Order.count({
                where: {
                    status: status,
                    updatedAt: { [Op.between]: [startDate, endDate] }
                }
            });
            orderCounts[status] = count;
        }

        // Lấy danh sách số đơn hàng theo ngày
        const ordersByDate = await models.Order.findAll({
            where: {
                createdAt: { [Op.between]: [startDate, endDate] }
            },
            attributes: [
                [models.sequelize.fn('date', models.sequelize.col('createdAt')), 'date'],
                [models.sequelize.fn('count', 'id'), 'orderCount']
            ],
            group: [models.sequelize.fn('date', models.sequelize.col('createdAt'))]
        });

        // Tính tổng doanh thu và số lượng đơn hàng
        const totalStats = await models.Order.findOne({
            where: {
                createdAt: { [Op.between]: [startDate, endDate] }
            },
            attributes: [
                [models.sequelize.fn('sum', models.sequelize.col('total')), 'totalRevenue'],
                [models.sequelize.fn('count', 'id'), 'orderCount']
            ]
        });
        const statistical = await totalDetail(req)
        // Trả về một object chứa thông tin từ cả ba yêu cầu
        const result = {
            orderCounts,
            ordersByDate,
            totalStats,
            statistical
        };

        // Trả về kết quả
        coreResponse(res, 200, "Get data success", result);
    } catch (error) {
        coreResponse(res, 500, "Error fetching order" + error.message);
    }
};

export const statistical = async (req, res) => {
    try {
        const data = await totalDetail(req)
        coreResponse(res, 200, "Get data statistical success", data);
    } catch (error) {
        coreResponse(res, 500, "Error fetching statistical" + error.message, error);
    }
};