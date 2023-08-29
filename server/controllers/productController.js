import { validationResult } from "express-validator";
import { coreResponse } from "../lib/coreResponse.js";
import {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
} from "../repositories/productRepository.js";

export const index = async (req, res) => {
    try {
        const data = await getAllProducts();
        coreResponse(res, 200, "Success", data);
    } catch (error) {
        coreResponse(res, 500, "Error fetching products from controller", error);
    }
};

export const store = async (req, res) => {
    try {
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(400).json({ errors: validationErrors.array() });
        }
        const productCreated = await createProduct(req.body);
        coreResponse(res, 201, "Product created successfully", productCreated);
    } catch (error) {
        coreResponse(res, 500, "Error creating product", error);
    }
};

export const update = async (req, res) => {
    try {
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(400).json({ errors: validationErrors.array() });
        }
        const productUpdated = await updateProduct(req);
        coreResponse(res, 201, "Product updated successfully", productUpdated);
    } catch (error) {
        coreResponse(res, 500, "Error updating product", error);
    }
};

export const forceDeleteProduct = async (req, res) => {
    try {
        const productDeleted = await deleteProduct(req);
        coreResponse(res, 201, "Product deleted successfully", productDeleted);
    } catch (error) {
        coreResponse(res, 500, "Error deleting product", error);
    }
};
