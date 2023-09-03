import express from 'express';
import { index , show} from '../../../controllers/menusController.js';


const router = express.Router();

router.get('/menu', index);
router.get('/menu-detail/:url', show);

export default router;
