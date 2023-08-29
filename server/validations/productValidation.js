import { body } from 'express-validator';
import { isUniqueSlug, isUniqueSlugUpdate } from '../repositories/productRepository.js';

export const createProductValidation = [
    body('productName').notEmpty().isString(),
    body('description').notEmpty().isString(),
    body('price').notEmpty().isDecimal(),
    body('originalPrice').notEmpty().isDecimal(),
    body('stockQuantity').notEmpty().isInt(),
    body('origin').notEmpty().isString(),
    body('notes').notEmpty().isString(),
    body('images').notEmpty().isString(),
    body('type').notEmpty().isIn(['pet', 'accessory', 'medical_equipment']),
    body('discount').notEmpty().isDecimal(),
    body('status').notEmpty().isIn(['featured', 'best_selling', 'normal']),
    body('expirationDate').optional().isDate(),
    body('slug').notEmpty().isString().custom(isUniqueSlug),
    body('createdBy').notEmpty().isInt(),
    body('editedBy').notEmpty().isInt(),
    body('seoId').optional().isInt(),
    body('postId').optional().isInt(),
    body('categoryId').notEmpty().isInt()
];

export const updateProductValidation = [
    body('productName').notEmpty().isString(),
    body('description').notEmpty().isString(),
    body('price').notEmpty().isDecimal(),
    body('originalPrice').notEmpty().isDecimal(),
    body('stockQuantity').notEmpty().isInt(),
    body('origin').notEmpty().isString(),
    body('notes').notEmpty().isString(),
    body('images').notEmpty().isString(),
    body('type').notEmpty().isIn(['pet', 'accessory', 'medical_equipment']),
    body('discount').notEmpty().isDecimal(),
    body('status').notEmpty().isIn(['featured', 'best_selling', 'normal']),
    body('expirationDate').optional().isDate(),
    body('slug').notEmpty().isString().custom(isUniqueSlugUpdate),
    body('editedBy').notEmpty().isInt(),
    body('seoId').optional().isInt(),
    body('postId').optional().isInt(),
    body('categoryId').notEmpty().isInt()
];
