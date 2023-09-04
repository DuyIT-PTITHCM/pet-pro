import express from 'express';
import { deleteFile, uploadFileAndSaveToDatabase, uploadFileEditor } from '../../../controllers/uploadController.js';
const router = express.Router();

router.post('/', uploadFileAndSaveToDatabase);
router.post('/editor', uploadFileEditor);
router.post('/delete', deleteFile);
export default router;