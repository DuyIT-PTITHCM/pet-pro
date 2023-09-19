import { validationResult } from "express-validator";
import { coreResponse } from "../lib/coreResponse.js";
import { createMenu, getAllMenus, updateMenu, deleteMenu, getDetailMenu, getAllMenusForFront, updateMenuPriority } from "../repositories/menuRepository.js";

export const index = async (req, res) => {
    try {
        const data = await getAllMenus();
        coreResponse(res, 200, "Success", data);
    } catch (error) {
        coreResponse(res, 500, "Error fetching menus from controller", error);
    }
};

export const indexFront = async (req, res) => {
    try {
        const data = await getAllMenusForFront();
        coreResponse(res, 200, "Success", data);
    } catch (error) {
        coreResponse(res, 500, "Error fetching menus from controller", error);
    }
};

export const show = async (req, res) => {

    try {
        const data = await getDetailMenu(req);
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
        coreResponse(res, 500, "Error creating menu ", error);
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

export const updateMenuPriorities = async (req, res) => {
    try {
        const { menuIds } = req.body;

        for (let i = 0; i < menuIds.length; i++) {
            const menuId = menuIds[i];
            const priority = i + 1;
            await updateMenuPriority(menuId, priority);
        }

        const menus = await getAllMenus();
        return coreResponse(res, 201, "Update Menu Priorities successfully", menus);
    } catch (error) {
        return coreResponse(res, 500, "Internal Server Error", error);
    }
};
