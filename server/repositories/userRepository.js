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

export const isUniqueEmail = async (email) => {
    const user = await models.User.findOne({ where: { email } });
    if (user) {
        return Promise.reject('Email already exists');
    }
    return Promise.resolve();
};

export const isUniquePhone = async (phone) => {
    const user = await models.User.findOne({ where: { phone } });
    if (user) {
        return Promise.reject('Phone already exists');
    }
    return Promise.resolve();
};