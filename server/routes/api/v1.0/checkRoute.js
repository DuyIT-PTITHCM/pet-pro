import express from 'express';
import { index, checkPetIn, checkPetOut } from '../../../controllers/checkInCheckoutController.js';

const router = express.Router();

router.get('/', index);
router.post('/', checkPetIn);
router.put('/:id', checkPetOut);

export default router;