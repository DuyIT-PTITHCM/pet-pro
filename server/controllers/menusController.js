import { coreResponse } from "../lib/coreResponse.js";
import { createMenu, getAllMenus  } from "../repositories/menuRepository.js";

export const index = async (req, res) => {
    try {
        const data = await getAllMenus();
        coreResponse(res, 200, "Success", data);
    } catch (error) {
        coreResponse(res, 500, "Error fetching menus from controller",error);
    }
};
export const store = async (req, res) => {
    try {
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(400).json({ errors: validationErrors.array() });
        }
        const createMenu = await createMenu(req.body);
        coreResponse(res, 201, "Menu created successfully", createMenu);
    } catch (error) {
        coreResponse(res, 500, "Error creating menu", error);
    }
};