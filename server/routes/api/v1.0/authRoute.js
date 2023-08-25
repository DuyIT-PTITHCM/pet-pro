// routes/users.js
import express from 'express';
import { login, register } from '../../../controllers/authController.js';
import { registerUserValidation } from '../../../validations/userValidation.js';
const router = express.Router();

router.post('/login', login);

router.post('/register', registerUserValidation, register);

//[todo] forget passwort

//[todo] refresh token

export default router;
