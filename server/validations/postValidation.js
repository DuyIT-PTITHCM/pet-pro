import { body } from 'express-validator';
import { isUniqueSlug, isUniqueSlugUpdate, isUniqueTitle, isUniqueTitleUpdate } from '../repositories/postRepository.js';

export const createPostValidation = [
    body('title').notEmpty().isString().custom(isUniqueTitle),
    body('slug').optional().custom(isUniqueSlug),
];

export const updatePostValidation = [
    body('title').notEmpty().isString().custom(isUniqueTitleUpdate),
    body('slug').optional().custom(isUniqueSlugUpdate),
];
