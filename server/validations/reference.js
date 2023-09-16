import { body } from 'express-validator';

export const referenceValidation = [
    body('referenceId')
        .optional()
        .isInt().withMessage('Reference ID must be an integer'),

    body('reference')
        .isIn(['blog', 'service', 'product', 'menu'])
        .withMessage('Reference must be one of: blog, service, product, menu')
];
