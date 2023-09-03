import express from 'express';
import { deleteFile, uploadFileAndSaveToDatabase } from '../../../controllers/uploadController.js';
const router = express.Router();

router.post('/', uploadFileAndSaveToDatabase);
router.post('/delete', deleteFile);
export default router;