import express from 'express';
import { index } from '../../../controllers/menusController.js';


const router = express.Router();

router.get('/menu', index);

export default router;
