import { Op, Sequelize } from 'sequelize';
import { models } from '../models/index.js';

export const getAllMenus = async () => {
    try {
        const data = await models.Menu.findAll({
            include: [
                {
                    model: models.Menu,
                    as: 'subMenus',
                    include: [
                        {
                            model: models.Categories,
                            as: 'categories'
                        }
                    ]
                },
                {
                    model: models.Seo,
                    as: 'seo',
                },
                {
                    model: models.Categories,
                    as: 'categories'
                }
            ],
            where: {
                parent_id: null
            },
            order: [['priority', 'ASC']],
        });

        return data;
    } catch (error) {
        process.stdout.write('Error fetching menu: ' + error + '\n');
        process.stdout.flush();
        throw new Error("Error fetching menus");
    }
};

export const getAllMenusForFront = async () => {
    try {
        const data = await models.Menu.findAll({
            include: [
                {
                    model: models.Menu,
                    as: 'subMenus',
                },
            ],
            where: {
                parent_id: null,
                active: true
            },
            order: [['priority', 'ASC']],

        });

        return data;
    } catch (error) {
        throw new Error("Error fetching menus");
    }
};

export const getDetailMenu = async (req) => {
    try {
        const url = req.params?.url;

        let data = await models.Menu.findOne({
            include: [
                {
                    model: models.Menu,
                    as: 'subMenus',
                    include: [
                        {
                            model: models.Categories,
                            as: 'categories',
                            include: [
                                {
                                    model: models.Product,
                                    as: 'products'
                                },
                                {
                                    model: models.Post,
                                    as: 'posts'
                                },
                            ]
                        }
                    ]
                },
                {
                    model: models.Seo,
                    as: 'seo',
                },
                {
                    model: models.Categories,
                    as: 'categories',
                    include: [
                        {
                            model: models.Product,
                            as: 'products'
                        }
                    ]
                }
            ],
            where: {
                url: url
            }
        });
        let menuReferent = [];
        if (data && data.parent_id) {
            menuReferent = await models.Menu.findAll({
                where: {
                    parent_id: data.parent_id
                }
            });
        }
        return { ...data.toJSON(), menuReferent };
    } catch (error) {
        throw new Error("Error fetching menus");
    }
};

export const createMenu = async (menuData) => {
    let { name, url, parent_id, isShowDescription, description, active, type } = menuData;
 
    if (parent_id) {
        const menu = await models.Menu.findByPk(parent_id);
        type = menu.type;
    }
    try {
        const newmenu = await models.Menu.create({
            name,
            url,
            parent_id,
            isShowDescription,
            description,
            active,
            type: type ? type : 'product'
        });
        return newmenu;
    } catch (error) {
        process.stdout.write('Error creating menu: ' + error + '\n');
        process.stdout.flush();

        throw new Error("Error creating menu");
    }
};
export const checkIdExits = async (menuId) => {
    const menu = await models.Menu.findByPk(menuId);
    if (!menu) {
        return Promise.reject('menu not exists');
    }
    return Promise.resolve();
};
export const updateMenu = async (req) => {
    const { id } = req.params;
    let {
        name,
        url,
        parent_id,
        isShowDescription,
        description,
        active,
        seoId = null,
        type = 'product', // Giá trị mặc định cho type
    } = req.body;

    if (parent_id) {
        const menu = await models.Menu.findByPk(parent_id);
        type = menu.type;
    }

    const transaction = await models.sequelize.transaction();

    try {
        const menu = await models.Menu.findByPk(id);

        if (!menu) {
            throw new Error('Menu not found');
        }

        menu.set({
            name,
            url,
            parent_id,
            description,
            isShowDescription,
            active,
            seoId,
            type,
        });

        await menu.save({ transaction });

        await models.Categories.update(
            { type },
            {
                where: {
                    menuId: id,
                },
                transaction,
            }
        );

        await transaction.commit();

        return menu;
    } catch (error) {
        await transaction.rollback();
        throw new Error(`Error updating menu: ${error.message}`);
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
export const isUniqueNameUpdate = async (name, { req }) => {
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
export const isUniqueUrlUpdate = async (url, { req }) => {
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
    if (menu?.length > 1) {
        return Promise.reject("url already exists");
    }
    return Promise.resolve();
};
export const isMenuExits = async (parent_id) => {
    if (!parent_id) {
        return Promise.resolve();
    }
    const menu = await models.Menu.findByPk(parent_id);
    if (!menu) {
        return Promise.reject('url not exists');
    }
    return Promise.resolve();
};

export const updateMenuPriority = async (menuId, priority) => {
    try {
      const menu = await models.Menu.findByPk(menuId);
      if (!menu) {
        throw new Error('Menu not found');
      }
      menu.priority = priority;
      await menu.save();
    } catch (error) {
      throw error;
    }
  };