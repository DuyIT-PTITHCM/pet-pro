import { validationResult } from "express-validator";
import { coreResponse } from "../lib/coreResponse.js";
import { createPost, getAllPosts, updatePost, deletePost } from "../repositories/postRepository.js";

export const index = async (req, res) => {
    try {
        const data = await getAllPosts();
        coreResponse(res, 200, "Success", data);
    } catch (error) {
        coreResponse(res, 500, "Error fetching posts from controller", error);
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