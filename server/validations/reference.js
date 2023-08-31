import { body } from 'express-validator';
export const referenceValidation = [
    body('referenceId').notEmpty().isInt().withMessage('reference id is required and type number'),
    body('reference').isIn(['article', 'categories', 'product','menu']).withMessage('reference must in article, categories, product,menu'),
];