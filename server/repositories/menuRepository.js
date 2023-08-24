import { Op } from 'sequelize';
import { models } from '../models/index.js';

export const getAllMenus = async () => {
    try {
        const data = await models.Menu.findAll({
            include: [
                {
                    model: models.Menu,
                    as: 'subMenus',
                    attributes: ['id', 'name', 'description', 'view', 'tags','url'],
                    include: [
                        {
                            model: models.Storage,
                            as: 'fileAttach'
                        }
                    ]
                },
                {
                    model: models.Storage,
                    as: 'fileAttach'
                },
            ],
            where: {
                parent_id: null
            }
        });

        return data;
    } catch (error) {
        throw new Error("Error fetching menus");
    }
};
export const createMenu = async (menuData) => {
    const { name, information, email, phone, password, birthDate, gender, emailConfirm, phoneConfirm, role } = menuData;

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