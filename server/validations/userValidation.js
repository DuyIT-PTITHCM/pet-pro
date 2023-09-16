import { body, param } from 'express-validator';
import { isUniqueEmail, isUniquePhone, isUniqueEmailUpdate, checkUserExits, isUniquePhoneUpdate } from '../repositories/userRepository.js';

export const createUserValidation = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isString().withMessage('Name must be a string'),

    body('email')
        .isEmail().withMessage('Invalid email format')
        .custom(isUniqueEmail).withMessage('Email is already in use'),

    body('phone')
        .isMobilePhone('vi-VN').withMessage('Invalid phone number format')
        .custom(isUniquePhone).withMessage('Phone number is already in use'),

    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),

    body('birthDate')
        .isISO8601().toDate().withMessage('Birthdate must be a valid date'),

    body('gender')
        .isIn(['male', 'female', 'other']).withMessage('Invalid gender value')
];

export const updateUserValidation = [
    param('id')
        .isInt().withMessage('User ID must be an integer')
        .custom(checkUserExits).withMessage('User does not exist'),

    body('name')
        .notEmpty().withMessage('Name is required')
        .isString().withMessage('Name must be a string'),

    body('email')
        .isEmail().withMessage('Invalid email format')
        .custom(isUniqueEmailUpdate).withMessage('Email is already in use'),

    body('phone')
        .isMobilePhone('vi-VN').withMessage('Invalid phone number format')
        .custom(isUniquePhoneUpdate).withMessage('Phone number is already in use'),

    body('birthDate')
        .isISO8601().toDate().withMessage('Birthdate must be a valid date'),

    body('gender')
        .isIn(['male', 'female', 'other']).withMessage('Invalid gender value')
];

export const registerUserValidation = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isString().withMessage('Name must be a string'),

    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .custom(isUniqueEmail).withMessage('Email is already in use'),

    body('phone')
        .notEmpty().withMessage('Phone is required')
        .isMobilePhone('vi-VN').withMessage('Invalid phone number format')
        .custom(isUniquePhone).withMessage('Phone number is already in use'),

    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),

    body('confirmPassword')
        .notEmpty().withMessage('Confirm password is required')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords do not match');
            }
            return true;
        })
];

