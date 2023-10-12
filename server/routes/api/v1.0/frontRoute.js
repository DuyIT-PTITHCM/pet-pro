import express from 'express';
import { indexFront, show } from '../../../controllers/menusController.js';
import { show as showPost } from '../../../controllers/postController.js';
import { getProductForFront, showProductFront } from '../../../controllers/productController.js';
import { getProductValidation } from '../../../validations/productValidation.js';


const router = express.Router();

router.get('/menu', indexFront);
router.get('/menu-detail/:url', show);
router.get('/product/:slug', showProductFront);
router.get('/blog/:slug', showPost);
router.get('/service/:slug', showPost);
router.get('/products', getProductValidation, getProductForFront);

export default router;
