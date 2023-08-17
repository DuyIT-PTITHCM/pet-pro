// routes/users.js
import express from 'express';
import { getAllUsers, store } from '../../../controllers/usersController.js';
const router = express.Router();
// import { getAllUsers } from '../controllers/usersController';

// Đây là Route API endpoint GET /api/users
router.get('/', getAllUsers);
router.post('/', store);

export default router;
