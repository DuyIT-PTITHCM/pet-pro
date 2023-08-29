import { body } from 'express-validator';
import {
    isUniqueCategoryName,
    isUniqueCategoryNameUpdate
} from '../repositories/categoriesRepository.js';

export const createCategoryValidation = [
    body('categoryName').notEmpty().isString().custom(isUniqueCategoryName),
    body('type').notEmpty().isString().isIn(['product', 'article']),
    body('seoId').optional().isInt(),
    body('postId').optional().isInt()
];

export const updateCategoryValidation = [
    body('categoryName').notEmpty().isString().custom(isUniqueCategoryNameUpdate),
    body('type').notEmpty().isString().isIn(['product', 'article']),
    body('seoId').optional().isInt(),
    body('postId').optional().isInt()
];
