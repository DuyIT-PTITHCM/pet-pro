import express from 'express';
import { create, index, update, remove } from '../../../controllers/petsController.js';

const router = express.Router();

router.get('/', index);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove)

export default router;