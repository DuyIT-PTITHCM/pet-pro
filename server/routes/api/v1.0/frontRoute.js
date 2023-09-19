import express from 'express';
import { indexFront, show } from '../../../controllers/menusController.js';
import { getProductForFront, showProductFront } from '../../../controllers/productController.js';
import { getProductValidation } from '../../../validations/productValidation.js';


const router = express.Router();

router.get('/menu', indexFront);
router.get('/menu-detail/:url', show);
router.get('/product/:slug', showProductFront);
router.get('/products', getProductValidation, getProductForFront);

export default router;
