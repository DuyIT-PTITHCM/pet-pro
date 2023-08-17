import { models } from '../models/index.js';

export const getAllUsers = async (page = 1, perPage, filter = {}) => {
    try {
        const { docs, pages, total } = await models.User.paginate({
            where: {
                deletedAt: null, // Chỉ lấy những người dùng chưa bị xóa mềm
                ...filter, // Sử dụng các điều kiện lọc từ đối tượng filter
            },
            page,
            paginate: perPage,
            order: [['createdAt', 'DESC']],
        });

        return { docs, pages, total };
    } catch (error) {
        throw new Error("Error fetching users");
    }
};
