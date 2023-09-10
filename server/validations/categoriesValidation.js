import { body } from 'express-validator';
import {
    isUniqueCategoryName,
    isUniqueCategoryNameUpdate
} from '../repositories/categoriesRepository.js';
import { checkIdExits } from '../repositories/menuRepository.js';

export const createCategoryValidation = [
    body('categoryName').notEmpty().isString().custom(isUniqueCategoryName),
    body('menuId').notEmpty().isInt().custom(checkIdExits)
];

export const updateCategoryValidation = [
    body('categoryName').notEmpty().isString().custom(isUniqueCategoryNameUpdate),
    body('menuId').notEmpty().isInt().custom(checkIdExits)
];
