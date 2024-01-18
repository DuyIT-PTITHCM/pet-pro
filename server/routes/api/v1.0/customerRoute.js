// routes/users.js
import express from 'express';
import { info, showProfile } from '../../../controllers/usersController.js';
const router = express.Router();

router.get('/profile', showProfile);
router.get('/info', info);
export default router;
