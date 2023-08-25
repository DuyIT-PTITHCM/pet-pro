import { body} from 'express-validator';
import { isUniqueName, isUniqueNameUpdate, isUniqueUrl, isUniqueUrlUpdate } from '../repositories/menuRepository.js';

export const createMenuValidation = [
    body('name').notEmpty().isString().custom(isUniqueName),
    body('url').notEmpty().isString().custom(isUniqueUrl)
];

export const updateMenuValidation = [
    body('name').notEmpty().isString().custom(isUniqueNameUpdate),
    body('url').notEmpty().isString().custom(isUniqueUrlUpdate)
];