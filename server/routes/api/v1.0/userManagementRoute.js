// routes/users.js
import express from 'express';
import { forceDeleteUser, index, restore, softDelete, store, update } from '../../../controllers/usersController.js';
const router = express.Router();

// Đây là Route API endpoint GET /api/users
router.get('/', index);
router.post('/', store);
router.put('/:id', update);
router.delete('/:id', softDelete);
router.delete('/:id/force', forceDeleteUser);
router.put('/:id/restore', restore);

export default router;
