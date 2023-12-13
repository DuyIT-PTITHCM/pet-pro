import express from 'express';
import { index, create, execute, cancel, update, testSendMail } from '../../../controllers/orderController.js';
const router = express.Router();

router.get('/', index);
router.post('/', create);
router.get('/execute', execute);
router.get('/cancel', cancel);
router.put('/:id/status', update);
router.post('/testsendmail', testSendMail);
export default router;
