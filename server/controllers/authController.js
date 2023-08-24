import { models } from "../models/index.js";
import { createJWTToken } from "../lib/jwtCommon.js";
import { coreResponse } from "../lib/coreResponse.js";
import { rigisterUser } from "../repositories/authRepository.js";
import { validationResult } from "express-validator";

export const login = async (req, res) => {
    try {
        const { email, password, rememberMe } = req.body;

        const user = await models.User.findOne({ where: { email } });

        if (!user) {
            return coreResponse(res, 401, 'Invalid credentials');
        }

        const isPasswordMatch = await user.comparePassword(password);

        if (!isPasswordMatch) {
            return coreResponse(res, 401, 'Invalid credentials');
        }
        const expiresIn = rememberMe ? '30d' : '7d';
        const token = createJWTToken(user.id, expiresIn);
        return coreResponse(res, 200, 'Login successful', { token });
    } catch (error) {
        console.error('Error during login:', error);
        return coreResponse(res, 500, 'Error during login', error);
    }
};


export const register = async (req, res) => {
    try {
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return coreResponse(res, 400, "Error validation", { errors: validationErrors.array() });
        }
        const user = await rigisterUser(req.body);

        return coreResponse(res, 201, 'User registered successfully', user);
    } catch (error) {
        return coreResponse(res, 500, 'Error registering user', error);
    }
};
