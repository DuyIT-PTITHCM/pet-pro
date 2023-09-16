import { body, query } from 'express-validator';
import { isUniqueSlug, isUniqueSlugUpdate } from '../repositories/productRepository.js';

export const createProductValidation = [
    body('productName')
        .notEmpty().withMessage('Product name is required')
        .isString().withMessage('Product name must be a string'),

    body('description')
        .notEmpty().withMessage('Description is required')
        .isString().withMessage('Description must be a string'),

    body('price')
        .notEmpty().withMessage('Price is required')
        .isDecimal().withMessage('Price must be a decimal'),

    body('originalPrice')
        .notEmpty().withMessage('Original price is required')
        .isDecimal().withMessage('Original price must be a decimal'),

    body('stockQuantity')
        .notEmpty().withMessage('Stock quantity is required')
        .isInt().withMessage('Stock quantity must be an integer'),

    body('origin')
        .notEmpty().withMessage('Origin is required')
        .isString().withMessage('Origin must be a string'),

    body('notes')
        .notEmpty().withMessage('Notes are required')
        .isString().withMessage('Notes must be a string'),

    body('images')
        .notEmpty().withMessage('Images are required')
        .isString().withMessage('Images must be a string'),

    body('type')
        .notEmpty().withMessage('Type is required')
        .isIn(['pet', 'accessory', 'medical_equipment'])
        .withMessage('Type must be pet, accessory, or medical_equipment'),

    body('discount')
        .notEmpty().withMessage('Discount is required')
        .isDecimal().withMessage('Discount must be a decimal'),

    body('status')
        .notEmpty().withMessage('Status is required')
        .isIn(['featured', 'best_selling', 'normal'])
        .withMessage('Status must be featured, best_selling, or normal'),

    body('expirationDate')
        .optional()
        .isDate().withMessage('Expiration date must be a valid date'),

    body('slug')
        .notEmpty().withMessage('Slug is required')
        .isString().withMessage('Slug must be a string')
        .custom(isUniqueSlug)
        .withMessage('Slug already exists'),

    body('createdBy')
        .notEmpty().withMessage('Created by is required')
        .isInt().withMessage('Created by must be an integer'),

    body('editedBy')
        .notEmpty().withMessage('Edited by is required')
        .isInt().withMessage('Edited by must be an integer'),

    body('seoId')
        .optional()
        .isInt().withMessage('SEO ID must be an integer'),

    body('postId')
        .optional()
        .isInt().withMessage('Post ID must be an integer'),

    body('categoryId')
        .notEmpty().withMessage('Category ID is required')
        .isInt().withMessage('Category ID must be an integer')
];


export const updateProductValidation = [
    body('productName')
        .notEmpty().withMessage('Product name is required')
        .isString().withMessage('Product name must be a string'),

    body('description')
        .notEmpty().withMessage('Description is required')
        .isString().withMessage('Description must be a string'),

    body('price')
        .notEmpty().withMessage('Price is required')
        .isDecimal().withMessage('Price must be a decimal'),

    body('originalPrice')
        .notEmpty().withMessage('Original price is required')
        .isDecimal().withMessage('Original price must be a decimal'),

    body('stockQuantity')
        .notEmpty().withMessage('Stock quantity is required')
        .isInt().withMessage('Stock quantity must be an integer'),

    body('origin')
        .notEmpty().withMessage('Origin is required')
        .isString().withMessage('Origin must be a string'),

    body('notes')
        .notEmpty().withMessage('Notes are required')
        .isString().withMessage('Notes must be a string'),

    body('images')
        .notEmpty().withMessage('Images are required')
        .isString().withMessage('Images must be a string'),

    body('type')
        .notEmpty().withMessage('Type is required')
        .isIn(['pet', 'accessory', 'medical_equipment'])
        .withMessage('Type must be pet, accessory, or medical_equipment'),

    body('discount')
        .notEmpty().withMessage('Discount is required')
        .isDecimal().withMessage('Discount must be a decimal'),

    body('status')
        .notEmpty().withMessage('Status is required')
        .isIn(['featured', 'best_selling', 'normal'])
        .withMessage('Status must be featured, best_selling, or normal'),

    body('expirationDate')
        .optional()
        .isDate().withMessage('Expiration date must be a valid date'),

    body('slug')
        .notEmpty().withMessage('Slug is required')
        .isString().withMessage('Slug must be a string')
        .custom(isUniqueSlugUpdate)
        .withMessage('Slug already exists'),

    body('editedBy')
        .notEmpty().withMessage('Edited by is required')
        .isInt().withMessage('Edited by must be an integer'),

    body('categoryId')
        .notEmpty().withMessage('Category ID is required')
        .isInt().withMessage('Category ID must be an integer')
];

export const getProductValidation = [
    query('type')
        .notEmpty().withMessage('Type is required')
        .isIn(['pet', 'accessory', 'medical_equipment'])
        .withMessage('Type must be pet, accessory, or medical_equipment'),

    query('status')
        .notEmpty().withMessage('Status is required')
        .isIn(['featured', 'best_selling', 'normal'])
        .withMessage('Status must be featured, best_selling, or normal')
];