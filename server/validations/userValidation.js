import { body, param } from 'express-validator';
import { isUniqueEmail, isUniquePhone, isUniqueEmailUpdate , checkUserExits} from '../repositories/userRepository.js';

export const createUserValidation = [
    body('name').notEmpty().isString(),
    body('email').isEmail().custom(isUniqueEmail),
    body('phone').isMobilePhone('vi-VN').custom(isUniquePhone),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('birthDate').isISO8601().toDate().withMessage('Birthdate must be a valid date'),
    body('gender').isIn(['male', 'female', 'other']).withMessage('Invalid gender value'),
];
export const updateUserValidation = [
    param('id').isInt().custom(checkUserExits),
    body('name').notEmpty().isString(),
    body('email').isEmail().custom(isUniqueEmailUpdate),
    body('phone').isMobilePhone('vi-VN').custom(isUniquePhone),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('birthDate').isISO8601().toDate().withMessage('Birthdate must be a valid date'),
    body('gender').isIn(['male', 'female', 'other']).withMessage('Invalid gender value'),
];

