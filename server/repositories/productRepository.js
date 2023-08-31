import { Op } from 'sequelize';
import { models } from '../models/index.js';

export const getAllProducts = async () => {
    try {
        const data = await models.Product.findAll({
            include: [
                {
                    model: models.Seo,
                    as: 'seo',
                },
                {
                    model: models.Post,
                    as: 'post',
                },
                {
                    model: models.Categories,
                    as: 'category',
                },
            ],
        });

        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching products");
    }
};

export const showProduct = async (id) => {
    try {
        return await models.Product.findByPk(id, {
            include: [
                {
                    model: models.Seo,
                    as: 'seo',
                },
                {
                    model: models.Post,
                    as: 'post',
                },
                {
                    model: models.Categories,
                    as: 'category',
                },
            ],
        });
    } catch (error) {
        throw new Error("Error showing product");
    }

};

export const createProduct = async (productData) => {
    try {
        const newProduct = await models.Product.create(productData);
        return newProduct;
    } catch (error) {
        console.log(error);
        throw new Error("Error creating product");
    }
};

export const updateProduct = async (req) => {
    const productId = req.params.id;
    const productData = req.body;

    try {
        const product = await models.Product.findByPk(productId);

        if (!product) {
            throw new Error('Product not found');
        }

        Object.assign(product, productData);
        await product.save();

        return product;
    } catch (error) {
        throw new Error("Error updating product");
    }
};

export const deleteProduct = async (req) => {
    const productId = req.params.id;
    try {
        const product = await models.Product.findByPk(productId);
        if (!product) {
            throw new Error('Product not found');
        }
        await product.destroy();
        return product;
    } catch (error) {
        throw new Error("Error deleting product");
    }
};

export const isUniqueSlug = async (slug) => {
    const product = await models.Product.findOne({ where: { slug } });
    if (product) {
        return Promise.reject('Slug already exists');
    }
    return Promise.resolve();
};

export const isUniqueSlugUpdate = async (slug, { req }) => {
    const productId = req.params.id;
    const product = await models.Product.findAll({
        where: {
            id: {
                [Op.ne]: productId
            },
            slug: {
                [Op.eq]: slug
            }
        }
    });
    if (product?.length > 0) {
        return Promise.reject('Slug already exists');
    }
    return Promise.resolve();
};