// routes/users.js
import express from 'express';
import {index } from '../../../controllers/menusController.js';
const router = express.Router();

router.get('/', index);
export default router;
