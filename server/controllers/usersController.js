import { coreResponse } from "../lib/coreResponse.js";
import { models } from "../models/index.js";
import { createUser, getAllUsers, updateUser } from "../repositories/userRepository.js";
import { literal } from 'sequelize';
import { validationResult } from 'express-validator';

const PER_PAGE = 20;
export const index = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const perPage = req.query.perPage || PER_PAGE;

        let filters = {
            gender: req.query.gender,
            email: req.query.email,
            phone: req.query.phone
        };

        if (req.query.softDelete === '1') {
            filters.deletedAt = literal('deletedAt IS NOT NULL'); 
        } else {
            filters.deletedAt = null;
        }

        filters = Object.entries(filters).reduce((acc, [key, value]) => {
            if (value !== null && value !== undefined && !(value instanceof Object && Object.keys(value).length === 0)) {
                acc[key] = value;
            }
            return acc;
        }, {});

        const { docs, pages, total } = await getAllUsers(page, perPage, filters);
        coreResponse(res, 200, "Success", { docs, pages, total });
    } catch (error) {
        coreResponse(res, 500, "Error fetching users");
    }
};


export const store = async (req, res) => {
    try {
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(400).json({ errors: validationErrors.array() });
        }
        const createdUser = await createUser(req.body);
        coreResponse(res, 201, "User created successfully", createdUser);
    } catch (error) {
        coreResponse(res, 500, "Error creating user", error);
    }
};

export const update = async (req, res) => {
    try {
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(400).json({ errors: validationErrors.array() });
        }
        const updatedUser = await updateUser(req);
        coreResponse(res, 201, "User updated successfully", updatedUser);  
    } catch (error) {
        console.error("Error updating user:", error);
        coreResponse(res, 500, "Error updating user");
    }
};

export const softDelete = async (req, res) => {
    try {
        const userId = req.params.id; 

        // Tìm người dùng cần xóa
        const user = await models.User.findByPk(userId);

        if (!user) {
            coreResponse(res, 404, "User not found");
            return;
        }

        // Cập nhật trường deletedAt để thực hiện soft delete
        user.deletedAt = new Date();
        await user.save();

        coreResponse(res, 200, "User soft deleted successfully");
    } catch (error) {
        console.error("Error soft deleting user:", error);
        coreResponse(res, 500, "Error soft deleting user");
    }
};

export const forceDeleteUser = async (req, res) => {
    try {
        const userId = req.params.id; 

        const user = await models.User.findByPk(userId);

        if (!user) {
            coreResponse(res, 404, "User not found");
            return;
        }

        await user.destroy(); // Thực hiện force delete

        coreResponse(res, 200, "User force deleted successfully");
    } catch (error) {
        console.error("Error force deleting user:", error);
        coreResponse(res, 500, "Error force deleting user");
    }
};

export const restore = async (req, res) => {
    try {
        const userId = req.params.id; 

        const user = await models.User.findByPk(userId, { paranoid: false });

        if (!user) {
            coreResponse(res, 404, "User not found");
            return;
        }

        user.deletedAt = null;
        await user.save();

        coreResponse(res, 200, "User restored successfully");
    } catch (error) {
        coreResponse(res, 500, "Error restoring user");
    }
};
