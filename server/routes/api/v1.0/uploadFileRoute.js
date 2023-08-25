import express from 'express';
import { uploadFileAndSaveToDatabase } from '../../../controllers/uploadController.js';
const router = express.Router();

router.post('/', uploadFileAndSaveToDatabase);
export default router;