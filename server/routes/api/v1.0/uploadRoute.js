// routes/users.js
import express from 'express';
import {uploadFileAndSaveToDatabase } from '../../../controllers/uploadController.js';
const router = express.Router();

router.get('/', uploadFileAndSaveToDatabase);
export default router;
