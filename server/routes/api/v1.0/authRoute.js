// routes/users.js
import express from 'express';
import { login, register } from '../../../controllers/authController.js';
const router = express.Router();

router.post('/login', login);

router.post('/register', register);

//[todo] forget passwort

//[todo] refresh token

export default router;
