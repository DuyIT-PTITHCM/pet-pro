import { body } from 'express-validator';
import { isUniqueEmail, isUniquePhone } from '../repositories/userRepository.js';

export const createUserValidation = [
    body('name').notEmpty().isString(),
    body('email').isEmail().custom(isUniqueEmail),
    body('phone').isMobilePhone('vi-VN').custom(isUniquePhone),
];