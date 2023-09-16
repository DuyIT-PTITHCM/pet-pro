import { body } from 'express-validator';
import { isMenuExits, isUniqueName, isUniqueNameUpdate, isUniqueUrl, isUniqueUrlUpdate } from '../repositories/menuRepository.js';

export const createMenuValidation = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isString().withMessage('Name must be a string')
        .custom(isUniqueName).withMessage('Name already exists'),

    body('url')
        .notEmpty().withMessage('URL is required')
        .isString().withMessage('URL must be a string')
        .custom(isUniqueUrl).withMessage('URL already exists'),

    body('parent_id')
        .optional()
        .custom(isMenuExits).withMessage('Parent menu does not exist')
];

export const updateMenuValidation = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isString().withMessage('Name must be a string')
        .custom(isUniqueNameUpdate).withMessage('Name already exists'),

    body('url')
        .notEmpty().withMessage('URL is required')
        .isString().withMessage('URL must be a string')
        .custom(isUniqueUrlUpdate).withMessage('URL already exists'),

    body('parent_id')
        .optional()
        .custom(isMenuExits).withMessage('Parent menu does not exist')
];
