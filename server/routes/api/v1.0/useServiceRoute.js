import express from 'express';
import { checkIn, checkOut, index } from '../../../controllers/useServiceController.js';

const router = express.Router();

router.get('/:code', index);
router.post('/', checkIn);
router.put('/:id', checkOut);

export default router;