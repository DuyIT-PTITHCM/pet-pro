import { body } from 'express-validator';
import {
    isUniqueCategoryName,
    isUniqueCategoryNameUpdate
} from '../repositories/categoriesRepository.js';
import { checkIdExits } from '../repositories/menuRepository.js';

export const createCategoryValidation = [
    body('categoryName')
        .notEmpty().withMessage('Category name is required')
        .isString().withMessage('Category name must be a string')
        .custom(isUniqueCategoryName).withMessage('Category name already exists'),

    body('menuId')
        .notEmpty().withMessage('Menu ID is required')
        .isInt().withMessage('Menu ID must be an integer')
        .custom(checkIdExits).withMessage('Menu ID does not exist in the database')
];

export const updateCategoryValidation = [
    body('categoryName')
        .notEmpty().withMessage('Category name is required')
        .isString().withMessage('Category name must be a string')
        .custom(isUniqueCategoryNameUpdate).withMessage('Category name already exists'),

    body('menuId')
        .notEmpty().withMessage('Menu ID is required')
        .isInt().withMessage('Menu ID must be an integer')
        .custom(checkIdExits).withMessage('Menu ID does not exist in the database')
];
