
import { coreResponse } from "../lib/coreResponse.js";
import { models } from "../models/index.js";

export const index = async (req, res) => {
    try {
        const orderCounts = {};
        const statuses = ['Pending', 'Confirm', 'Processing', 'Shipping', 'Completed', 'Returned', 'Canceled'];

        // Đếm số đơn hàng cho mỗi trạng thái
        for (const status of statuses) {
            const count = await models.Order.count({
                where: {
                    status: status
                }
            });
            orderCounts[status] = count;
        }

        // Lấy danh sách số đơn hàng theo ngày
        const ordersByDate = await models.Order.findAll({
            attributes: [
                [models.sequelize.fn('date', models.sequelize.col('createdAt')), 'date'],
                [models.sequelize.fn('count', 'id'), 'orderCount']
            ],
            group: [models.sequelize.fn('date', models.sequelize.col('createdAt'))]
        });

        // Tính tổng doanh thu và số lượng đơn hàng
        const totalStats = await models.Order.findOne({
            attributes: [
                [models.sequelize.fn('sum', models.sequelize.col('total')), 'totalRevenue'],
                [models.sequelize.fn('count', 'id'), 'orderCount']
            ]
        });

        // Trả về một object chứa thông tin từ cả ba yêu cầu
        const result = {
            orderCounts,
            ordersByDate,
            totalStats
        };

        // Trả về kết quả
        coreResponse(res, 200, result);
    } catch (error) {
        coreResponse(res, 500, "Error fetching order" + error.message);
    }
};