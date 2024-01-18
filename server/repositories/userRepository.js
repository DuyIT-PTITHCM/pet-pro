import { Op } from 'sequelize';
import { models } from '../models/index.js';
import bcrypt from 'bcryptjs';
import { markImageAsUsed } from '../utils/imageUtils.js';

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

export const isUniquePhoneUpdate = async (phone,{req}) => {
    const userId = req.params.id;
    const user = await models.User.findAll({
        where: {
            id: {
                [Op.ne]: userId
            },
            phone: {
                [Op.eq]: phone
            }
        }
    });
    if (user.length > 0) {
        return Promise.reject("Phone already exists");
    }
    return Promise.resolve();
};

export const createUser = async (userData) => {
    const { name, avatar, information, email, phone, password, birthDate, gender, emailConfirm, phoneConfirm, role } = userData;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    let transaction;
    try {
        transaction = await models.sequelize.transaction();

        await markImageAsUsed(avatar,transaction);

        const newUser = await models.User.create({
            name,
            avatar,
            information,
            email,
            phone,
            password: hashedPassword,
            birthDate,
            gender,
            emailConfirm,
            phoneConfirm,
            role,
        }, { transaction });

        await transaction.commit();
        const { password: passwordToRemove, ...userWithoutPassword } = newUser.dataValues;

        return userWithoutPassword;
    } catch (error) {
        if (transaction) {
            await transaction.rollback();
        }
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

    const { name, information, email, phone, birthDate, gender, emailConfirm, phoneConfirm, role, avatar } = req.body;
    let transaction;
    try {
        transaction = await models.sequelize.transaction();

        await markImageAsUsed(avatar,transaction);

        const user = await models.User.findByPk(userId);
        user.name = name;
        user.avatar = avatar;
        user.information = information;
        user.email = email;
        user.phone = phone;
        user.birthDate = birthDate;
        user.gender = gender;
        user.emailConfirm = emailConfirm;
        user.phoneConfirm = phoneConfirm;
        user.role = role;

        await user.save({transaction});

        await transaction.commit();
        return user;

    } catch (error) {
        if (transaction) {
            await transaction.rollback();
        }
        throw new Error("Error updating user");
    }

};

export const showDetail = async (id) => {
    try {
        return await models.User.findByPk(id, {
            attributes: { exclude: ['password'] }
        });
    } catch (error) {
        throw new Error("Error showing user");
    }
};

export const profile = async (user) => {
    try {
        console.log("user profile")
        console.log(user)
        const userid = user.id;
        return await models.User.findByPk(userid, {
            attributes: { exclude: ['password'] },
            include: [{
                model: models.Pet,
                as: 'pets',
              },
              {
                model: models.Order,
                as: 'orders',
                include: [{
                    model: models.OrderItem,
                    as: 'orderItems',
                  }]
              }],
        });
    } catch (error) {
        throw new Error("Error get user profile");
    }

};