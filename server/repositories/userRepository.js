import { models } from '../models/index.js';

export const getAllUsers = async (page = 1, perPage, filters = {}) => {
    try {
        const { docs, pages, total } = await models.User.paginate({
            where: {
                ...filters, 
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
