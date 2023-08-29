import express from 'express';
import {
    createProductValidation,
    updateProductValidation,
} from '../../../validations/productValidation.js';
import {
    forceDeleteProduct,
    index,
    store,
    update,
} from '../../../controllers/productController.js';

const router = express.Router();

router.get('/', index);
router.post('/', createProductValidation, store);
router.put('/:id', updateProductValidation, update);
router.delete('/:id', forceDeleteProduct);

export default router;
