// routes/users.js
import express from 'express';
import { forceDeleteUser, index, restore, softDelete, store, update, sendEmail, show, info } from '../../../controllers/usersController.js';
import { createUserValidation, updateUserValidation } from './../../../validations/userValidation.js';
const router = express.Router();

// Đây là Route API endpoint GET /api/users
router.get('/', index);
router.get('/:id', show);
router.get('/info', info);
router.post('/', createUserValidation, store);
router.put('/:id', updateUserValidation, update);
router.delete('/:id', softDelete);
router.delete('/:id/force', forceDeleteUser);
router.put('/:id/restore', restore);

router.post('/send-email', sendEmail);
export default router;
