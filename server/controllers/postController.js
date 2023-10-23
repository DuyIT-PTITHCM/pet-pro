import { validationResult } from "express-validator";
import { coreResponse } from "../lib/coreResponse.js";
import { createPost, getAllPosts, updatePost, deletePost, showPost, getPostsLastedByType } from "../repositories/postRepository.js";

const PER_PAGE = 10;
export const index = async (req, res) => {
    let page = req.query?.page || 1;
    const size = req.query?.size || PER_PAGE;

    let filters = {
        type: 'service'
    };

    filters.type = req.query?.type ? req.query?.type : 'service';

    try {
        const data = await getAllPosts(page, size, filters);
        coreResponse(res, 200, "Success", data);
    } catch (error) {
        coreResponse(res, 500, "Error fetching posts from controller", error);
    }
};

export const lasted = async (res) => {
    let filters = {
        type: 'blog'
    };
    try {
        const data = await getPostsLastedByType(filters);
        coreResponse(res, 200, "Success", data);
    } catch (error) {
        coreResponse(res, 500, "Error fetching posts from controller", error);
    }
};

export const lastedService = async (res, res) => {
    let filters = {
        type: 'service'
    };
    try {
        const data = await getPostsLastedByType(filters);
        coreResponse(res, 200, "Success", data);
    } catch (error) {
        coreResponse(res, 500, "Error fetching posts from controller", error);
    }
};

export const show = async (req, res) => {
    try {
        const data = await showPost(req);
        coreResponse(res, 200, "Success", data);
    } catch (error) {
        coreResponse(res, 500, "Error fetching post", error);
    }
};


export const store = async (req, res) => {
    try {
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(400).json({ errors: validationErrors.array() });
        }
        const postCreated = await createPost(req.body);
        coreResponse(res, 201, "Post created successfully", postCreated);
    } catch (error) {
        coreResponse(res, 500, "Error creating post", error);
    }
};

export const update = async (req, res) => {
    try {
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(400).json({ errors: validationErrors.array() });
        }
        const postId = req.params.id;
        const postUpdated = await updatePost(postId, req.body);
        coreResponse(res, 201, "Post updated successfully", postUpdated);
    } catch (error) {
        coreResponse(res, 500, "Error updating post", error);
    }
};

export const forceDeletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const postDeleted = await deletePost(postId);
        coreResponse(res, 201, "Post deleted successfully", postDeleted);
    } catch (error) {
        coreResponse(res, 500, "Error deleting post", error);
    }
};
