import { Op } from 'sequelize';
import { models } from '../models/index.js';

export const getAllPosts = async (page = 1, perPage = 10, filters = {}) => {
    try {
        const posts = await models.Post.paginate({
            include: [
                {
                    model: models.Categories,
                    as: 'category',
                    where: {
                        type: filters.type
                    }
                }
            ],
            page,
            paginate: perPage,
            order: [['createdAt', 'DESC']],
        });

        return posts;
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching posts");
    }
};

export const createPost = async (postData) => {
    const { title, content, description, author, published_at, views, imageUrl, referenceId, reference, categoryId, slug } = postData;

    let transaction;
    try {
        transaction = await models.sequelize.transaction();
        const newPost = await models.Post.create({
            title,
            content,
            description,
            author,
            published_at,
            views,
            slug,
            categoryId,
            imageUrl
        }, { transaction });

        switch (reference) {
            case 'product':
                let product = await models.Product.findByPk(referenceId);
                product.postId = newPost.id;
                await product.save({ transaction });
                break;
            case 'menu':
                let menu = await models.Menu.findByPk(referenceId);
                menu.postId = newPost.id;
                await menu.save({ transaction });
                break;
            case 'article':
            case 'service':
                break;
            default:
                break;
        }
        await transaction.commit();
        return newPost;
    } catch (error) {
        if (transaction) {
            await transaction.rollback();
        }
        throw new Error("Error creating post");
    }
};

export const updatePost = async (postId, postData) => {
    const { title, content, description, author, published_at, views, imageUrl, categoryId, slug } = postData;

    try {
        const post = await models.Post.findByPk(postId);

        if (!post) {
            throw new Error('Post not found');
        }

        post.title = title;
        post.content = content;
        post.author = author;
        post.published_at = published_at;
        post.slug = slug;
        post.description = description;
        if (categoryId) {
            post.categoryId = categoryId;
        }
        post.views = views;
        post.imageUrl = imageUrl;
        await post.save();

        return post;
    } catch (error) {
        throw new Error("Error updating post");
    }
};

export const deletePost = async (postId) => {
    try {
        const post = await models.Post.findByPk(postId);

        if (!post) {
            throw new Error('Post not found');
        }

        await post.destroy();
        return post;
    } catch (error) {
        throw new Error("Error deleting post");
    }
};

export const isUniqueTitle = async (title) => {
    const post = await models.Post.findOne({ where: { title } });
    if (post) {
        return Promise.reject('Title already exists');
    }
    return Promise.resolve();
};

export const isUniqueTitleUpdate = async (title, { req }) => {
    const postId = req.params.id;
    const post = await models.Post.findAll({
        where: {
            id: {
                [Op.ne]: postId
            },
            title: {
                [Op.eq]: title
            }
        }
    });
    if (post?.length > 0) {
        return Promise.reject("Title already exists");
    }
    return Promise.resolve();
};

export const isUniqueSlug = async (slug) => {
    const post = await models.Post.findOne({ where: { slug } });
    if (post) {
        return Promise.reject('Slug already exists');
    }
    return Promise.resolve();
};

export const isUniqueSlugUpdate = async (slug, { req }) => {
    const productId = req.params.id;
    const post = await models.Post.findAll({
        where: {
            id: {
                [Op.ne]: productId
            },
            slug: {
                [Op.eq]: slug
            }
        }
    });
    if (post?.length > 1) {
        return Promise.reject('Slug already exists');
    }
    return Promise.resolve();
};