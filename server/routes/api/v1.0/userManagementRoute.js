// routes/users.js
import express from 'express';
import { forceDeleteUser, index, restore, softDelete, store, update } from '../../../controllers/usersController.js';
import { createUserValidation } from './../../../validations/userValidation.js';
const router = express.Router();

// Đây là Route API endpoint GET /api/users
router.get('/', index);
router.post('/', createUserValidation, store);
router.put('/:id', update);
router.delete('/:id', softDelete);
router.delete('/:id/force', forceDeleteUser);
router.put('/:id/restore', restore);

export default router;
