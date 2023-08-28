import { body } from 'express-validator';
import { isUniqueTitle, isUniqueTitleUpdate } from '../repositories/postRepository.js';

export const createPostValidation = [
    body('title').notEmpty().isString().custom(isUniqueTitle),
];

export const updatePostValidation = [
    body('title').notEmpty().isString().custom(isUniqueTitleUpdate),
];
