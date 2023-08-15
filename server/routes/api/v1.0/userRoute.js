// routes/users.js
import express from 'express';
import { getAllUsers } from '../../../controllers/usersController.js';
const router = express.Router();
// import { getAllUsers } from '../controllers/usersController';

// Đây là Route API endpoint GET /api/users
router.get('/', getAllUsers);

export default router;
