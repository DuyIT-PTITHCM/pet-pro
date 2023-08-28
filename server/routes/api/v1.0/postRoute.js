import express from 'express';
import { forceDeletePost, index, store, update } from '../../../controllers/postController.js';
import { createPostValidation, updatePostValidation } from '../../../validations/postValidation.js';
const router = express.Router();

router.get('/', index);
router.post('/', createPostValidation, store);
router.put('/:id', updatePostValidation, update);
router.delete('/:id', forceDeletePost);

export default router;
