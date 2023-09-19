import { Op } from 'sequelize';
import { models } from '../models/index.js';
import { markImagesListAsUsed } from '../utils/imageUtils.js';

export const getAllProducts = async (page = 1, perPage = 10, filters = {}) => {
    try {
        const data = await models.Product.paginate({
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
            page,
            paginate: perPage,
            order: [['createdAt', 'DESC']],
        });

        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching products");
    }
};

export const getAllProductsForFront = async (filters = {}) => {
    try {
        const data = await models.Product.findAll({
            order: [['createdAt', 'DESC']],
            where: {
                ...filters
            }
        });

        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching products");
    }
};



export const showProduct = async (req) => {
    const id = req.params.id;
    const slug = req.params.slug;

    try {
        const product = await models.Product.findOne({
            where: id ? { id } : { slug },
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

        if (!product) {
            throw new Error("Product not found");
        }

        return product;
    } catch (error) {
        throw new Error("Error showing product");
    }
};


export const showProductForFront = async (req) => {
    const id = req.params.id;
    const slug = req.params.slug;
    let filter = {};
    if (id) {
        filter.id = {
            [Op.ne]: id
        };
    } else {
        filter.slug = {
            [Op.ne]: slug
        };
    }

    const productDetail = await models.Product.findOne({
        where: id ? { id } : { slug },
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

    if (!productDetail) {
        throw new Error("Product not found");
    }

    const productReferences = await models.Product.findAll({
        where: {
            categoryId: productDetail.categoryId,
            ...filter
        },
    });

    const product = {
        ...productDetail.toJSON(),
        productReferences,
    };

    return product;

}

export const createProduct = async (productData) => {
    let transaction;
    try {
        transaction = await models.sequelize.transaction();
        await markImagesListAsUsed(productData.images, transaction);
        const newProduct = await models.Product.create(productData, { transaction });
        await transaction.commit();
        return newProduct;
    } catch (error) {
        console.log(error);
        if (transaction) {
            await transaction.rollback();
        }
        throw new Error("Error creating product");
    }
};

export const updateProduct = async (req) => {
    const productId = req.params.id;
    const productData = req.body;
    let transaction;
    try {
        transaction = await models.sequelize.transaction();
        await markImagesListAsUsed(productData.images, transaction);

        const product = await models.Product.findByPk(productId);

        if (!product) {
            throw new Error('Product not found');
        }

        Object.assign(product, productData);
        await product.save({ transaction });
        await transaction.commit();

        return product;
    } catch (error) {
        if (transaction) {
            await transaction.rollback();
        }
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