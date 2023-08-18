import { Op } from 'sequelize';
import { models } from '../models/index.js';
import bcrypt from 'bcryptjs';

export const getAllUsers = async (page = 1, perPage, filters = {}) => {
    try {
        const { docs, pages, total } = await models.User.paginate({
            where: {
                ...filters,
            },
            page,
            paginate: perPage,
            order: [['createdAt', 'DESC']],
            attributes: { exclude: ['password'] }
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
export const isUniqueEmailUpdate = async (email, { req }) => {
    const userId = req.params.id;
    const user = await models.User.findAll({
        where: {
            id: {
                [Op.ne]: userId
            },
            email: {
                [Op.eq]: email
            }
        }
    });
    if (user.length > 0) {
        return Promise.reject("Email already exists");
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

export const createUser = async (userData) => {
    const { name, information, email, phone, password, birthDate, gender, emailConfirm, phoneConfirm, role } = userData;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    try {
        const newUser = await models.User.create({
            name,
            information,
            email,
            phone,
            password: hashedPassword,
            birthDate,
            gender,
            emailConfirm,
            phoneConfirm,
            role,
        });
        const { password: passwordToRemove, ...userWithoutPassword } = newUser.dataValues;

        return userWithoutPassword;
    } catch (error) {
        throw new Error("Error creating user");
    }
};

export const checkUserExits = async (id) => {
    const user = await models.User.findByPk(id);
    if (!user) {
        return Promise.reject('User not found');
    }
    return Promise.resolve();
};

export const updateUser = async (req) => {
    const userId = req.params.id;

    const { name, information, email, phone, birthDate, gender, emailConfirm, phoneConfirm, role } = req.body;
    try {
        const user = await models.User.findByPk(userId);
        user.name = name;
        user.information = information;
        user.email = email;
        user.phone = phone;
        user.birthDate = birthDate;
        user.gender = gender;
        user.emailConfirm = emailConfirm;
        user.phoneConfirm = phoneConfirm;
        user.role = role;

        await user.save();
        return user;

    } catch (error) {
        throw new Error("Error updating user");
    }

};
