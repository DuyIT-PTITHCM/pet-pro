import { body } from 'express-validator';
export const referenceValidation = [
    body('referenceId').optional().isInt().withMessage('reference id is required and type number'),
    body('reference').isIn(['blog', 'service', 'product','menu']).withMessage('reference must in blog, service, product,menu'),
];