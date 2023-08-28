import { Op } from 'sequelize';
import { models } from '../models/index.js';

export const getAllPosts = async () => {
    try {
        const posts = await models.Post.findAll({
            include: [
                {
                    model: models.Menu,
                    as: 'menu',
                    attributes: ['id', 'name', 'url']
                }
            ]
        });

        return posts;
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching posts");
    }
};

export const createPost = async (postData) => {
    const { title, content, author, published_at, tags, category, views, imageUrl, menuId } = postData;

    try {
        const newPost = await models.Post.create({
            title,
            content,
            author,
            published_at,
            tags,
            category,
            views,
            imageUrl,
            menuId
        });

        return newPost;
    } catch (error) {
        throw new Error("Error creating post");
    }
};

export const updatePost = async (postId, postData) => {
    const { title, content, author, published_at, tags, category, views, imageUrl, menuId } = postData;

    try {
        const post = await models.Post.findByPk(postId);

        if (!post) {
            throw new Error('Post not found');
        }

        post.title = title;
        post.content = content;
        post.author = author;
        post.published_at = published_at;
        post.tags = tags;
        post.category = category;
        post.views = views;
        post.imageUrl = imageUrl;
        post.menuId = menuId;

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
