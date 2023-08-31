import express from 'express';
import { destroy, index, show, store, update } from '../../../controllers/seoController.js';
import { referenceValidation } from '../../../validations/reference.js';
const router = express.Router();

router.get('/', index);
router.get('/:id', show);
router.post('/', referenceValidation, store);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;
