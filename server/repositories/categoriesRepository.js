import { Op } from 'sequelize';
import { models } from '../models/index.js';

export const getAllCategories = async (filters = {}) => {
    try {
        const data = await models.Categories.findAll({
            include: [
                {
                    model: models.Product,
                    as: 'products'
                },
                {
                    model: models.Menu,
                    as: 'menu',
                    attributes:['name']
                }
            ],
            where: {
                ...filters,
            }
        });

        return data;
    } catch (error) {
        throw new Error("Error fetching categories");
    }
};

export const createCategory = async (categoryData) => {
    const { categoryName,menuId } = categoryData;
    const menuType = await models.Menu.findByPk(menuId);

    try {
        const newCategory = await models.Categories.create({
            categoryName,
            type : menuType.type ,
            menuId
        });
        return newCategory;
    } catch (error) {
        throw new Error("Error creating category");
    }
};

export const updateCategory = async (req) => {
    const categoryId = req.params.id;
    const { categoryName, menuId } = req.body;
    const menuType = await models.Menu.findByPk(menuId);

    try {
        const category = await models.Categories.findByPk(categoryId);

        if (!category) {
            throw new Error('Category not found');
        }

        category.categoryName = categoryName;
        category.type = menuType.type ,
        category.menuId = menuId;

        await category.save();

        return category;
    } catch (error) {
        throw new Error("Error updating category");
    }
};

export const deleteCategory = async (req) => {
    const categoryId = req.params.id;
    try {
        const category = await models.Categories.findByPk(categoryId);
        if (!category) {
            throw new Error('Category not found');
        }
        await category.destroy();
        return category;
    } catch (error) {
        throw new Error("Error deleting category");
    }
};

export const isUniqueCategoryName = async (categoryName) => {
    const category = await models.Categories.findOne({ where: { categoryName } });
    if (category) {
        return Promise.reject('Category name already exists');
    }
    return Promise.resolve();
};

export const isUniqueCategoryNameUpdate = async (categoryName, { req }) => {
    const categoryId = req.params.id;
    const category = await models.Categories.findAll({
        where: {
            id: {
                [Op.ne]: categoryId
            },
            categoryName: {
                [Op.eq]: categoryName
            }
        }
    });
    if (category?.length > 0) {
        return Promise.reject("Category name already exists");
    }
    return Promise.resolve();
};
