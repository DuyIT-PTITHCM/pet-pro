import express from 'express';
import { indexFront, show} from '../../../controllers/menusController.js';
import { show as showProduct} from '../../../controllers/productController.js';


const router = express.Router();

router.get('/menu', indexFront);
router.get('/menu-detail/:url', show);
router.get('/product/:slug', showProduct);

export default router;
