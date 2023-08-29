import express from 'express';
import {
    forceDeleteCategory,
    index,
    store,
    update,
} from '../../../controllers/categoriesController.js';
import {
    createCategoryValidation,
    updateCategoryValidation,
} from '../../../validations/categoriesValidation.js';

const router = express.Router();

router.get('/', index);
router.post('/', createCategoryValidation, store);
router.put('/:id', updateCategoryValidation, update);
router.delete('/:id', forceDeleteCategory);

export default router;
