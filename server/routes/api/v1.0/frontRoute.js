import express from 'express';
import { index , show} from '../../../controllers/menusController.js';
import { show as showProduct} from '../../../controllers/productController.js';


const router = express.Router();

router.get('/menu', index);
router.get('/menu-detail/:url', show);
router.get('/product/:slug', showProduct);

export default router;
