import { Op } from 'sequelize';
import { models } from '../models/index.js';

export const getAllMenus = async () => {
    try {
        const data = await models.Menu.findAll({
            include: [
                {
                    model: models.Menu,
                    as: 'subMenus',
                    attributes: ['id', 'name', 'description', 'view', 'tags', 'url']
                }
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
    const { name, description, tags, url, parent_id } = menuData;

    try {
        const newmenu = await models.Menu.create({
            name,
            description,
            tags,
            url,
            parent_id
        });
        return newmenu;
    } catch (error) {
        console.log(error);
        throw new Error("Error creating menu");
    }
};
export const updateMenu = async (req) => {
    const menuId = req.params.id;
    const { name, description, tags, url, parent_id } = req.body;
    try {
        const menu = await models.Menu.findByPk(menuId);

        if (!menu) {
            throw new Error('Menu not found');
        }

        menu.name = name;
        menu.description = description;
        menu.tags = tags;
        menu.url = url;
        menu.parent_id = parent_id;

        await menu.save();

        return menu;
    } catch (error) {
        throw new Error("Error updating menu");
    }
};
export const deleteMenu = async (req) => {
    const menuId = req.params.id;
    try {
        const menu = await models.Menu.findByPk(menuId);
        if (!menu) {
            throw new Error('Menu not found');
        }
        await menu.destroy();
        return menu;
    } catch (error) {
        throw new Error("Error deleting menu");
    }
};

export const isUniqueUrl = async (url) => {
    const menu = await models.Menu.findOne({ where: { url } });
    if (menu) {
        return Promise.reject('url already exists');
    }
    return Promise.resolve();
};
export const isUniqueName = async (name) => {
    const menu = await models.Menu.findOne({ where: { name } });
    if (menu) {
        return Promise.reject('name already exists');
    }
    return Promise.resolve();
};
export const isUniqueNameUpdate = async (name,{ req }) => {
    const menuId = req.params.id;
    const menu = await models.Menu.findAll({
        where: {
            id: {
                [Op.ne]: menuId
            },
            name: {
                [Op.eq]: name
            }
        }
    });
    if (menu?.length > 0) {
        return Promise.reject("name already exists");
    }
    return Promise.resolve();
};
export const isUniqueUrlUpdate = async (url,{ req }) => {
    const menuId = req.params.id;
    const menu = await models.Menu.findAll({
        where: {
            id: {
                [Op.ne]: menuId
            },
            url: {
                [Op.eq]: url
            }
        }
    });
    if (menu?.length > 0) {
        return Promise.reject("url already exists");
    }
    return Promise.resolve();
};