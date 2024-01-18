import express from 'express';
import { index, statistical } from '../../../controllers/dashboardController.js';
const router = express.Router();

router.get('/', index);
router.get('/statistical', statistical);
export default router;
