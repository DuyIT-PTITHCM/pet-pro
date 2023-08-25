import { validationResult } from "express-validator";
import { coreResponse } from "../lib/coreResponse.js";
import { createMenu, getAllMenus, updateMenu, deleteMenu } from "../repositories/menuRepository.js";

export const index = async (req, res) => {
    try {
        const data = await getAllMenus();
        coreResponse(res, 200, "Success", data);
    } catch (error) {
        coreResponse(res, 500, "Error fetching menus from controller", error);
    }
};
export const store = async (req, res) => {
    try {
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(400).json({ errors: validationErrors.array() });
        }
        const menuCeated = await createMenu(req.body);
        coreResponse(res, 201, "Menu created successfully", menuCeated);
    } catch (error) {
        coreResponse(res, 500, "Error creating menu", error);
    }
};

export const update = async (req, res) => {
    try {
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(400).json({ errors: validationErrors.array() });
        }
        const menuUpdated = await updateMenu(req);
        coreResponse(res, 201, "Menu updated successfully", menuUpdated);
    } catch (error) {
        coreResponse(res, 500, "Error updating menu", error);
    }
};

export const forceDeleteMenu = async (req, res) => {
    try {
        const menuDeleted = await deleteMenu(req);
        coreResponse(res, 201, "Menu deleted successfully", menuDeleted);
    } catch (error) {
        coreResponse(res, 500, "Error deleting menu", error);
    }
};
