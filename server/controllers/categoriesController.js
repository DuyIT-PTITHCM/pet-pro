import { validationResult } from "express-validator";
import { coreResponse } from "../lib/coreResponse.js";
import {
    createCategory,
    getAllCategories,
    updateCategory,
    deleteCategory,
} from "../repositories/categoriesRepository.js";

export const index = async (req, res) => {
    let type = req.query?.type? req.query?.type: 'article';
    let filters = {
        menuId: req.query.menuId
    };

    filters = Object.entries(filters).reduce((acc, [key, value]) => {
        if (value !== null && value !== undefined && !(value instanceof Object && Object.keys(value).length === 0)) {
            acc[key] = value;
        }
        return acc;
    }, {});
    try {

        const data = await getAllCategories(type,filters);
        coreResponse(res, 200, "Success", data);
    } catch (error) {
        coreResponse(res, 500, "Error fetching categories from controller", error);
    }
};

export const store = async (req, res) => {
    try {
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(400).json({ errors: validationErrors.array() });
        }
        const categoryCreated = await createCategory(req.body);
        coreResponse(res, 201, "Category created successfully", categoryCreated);
    } catch (error) {
        coreResponse(res, 500, "Error creating category", error);
    }
};

export const update = async (req, res) => {
    try {
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(400).json({ errors: validationErrors.array() });
        }
        const categoryUpdated = await updateCategory(req);
        coreResponse(res, 201, "Category updated successfully", categoryUpdated);
    } catch (error) {
        coreResponse(res, 500, "Error updating category", error);
    }
};

export const forceDeleteCategory = async (req, res) => {
    try {
        const categoryDeleted = await deleteCategory(req);
        coreResponse(res, 201, "Category deleted successfully", categoryDeleted);
    } catch (error) {
        coreResponse(res, 500, "Error deleting category", error);
    }
};
