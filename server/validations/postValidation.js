import { body } from 'express-validator';
import { isUniqueSlug, isUniqueSlugUpdate, isUniqueTitle, isUniqueTitleUpdate } from '../repositories/postRepository.js';

export const createPostValidation = [
    body('title')
        .notEmpty().withMessage('Title is required')
        .isString().withMessage('Title must be a string')
        .custom(isUniqueTitle).withMessage('Title already exists'),

    body('slug')
        .optional()
        .custom(isUniqueSlug).withMessage('Slug already exists')
];

export const updatePostValidation = [
    body('title')
        .notEmpty().withMessage('Title is required')
        .isString().withMessage('Title must be a string')
        .custom(isUniqueTitleUpdate).withMessage('Title already exists'),

    body('slug')
        .optional()
        .custom(isUniqueSlugUpdate).withMessage('Slug already exists')
];
