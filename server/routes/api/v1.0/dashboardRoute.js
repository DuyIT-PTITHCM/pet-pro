import express from 'express';
import { index } from '../../../controllers/dashboardController.js';
const router = express.Router();

router.get('/', index);
export default router;
