import express from 'express';
import { forceDeletePost, index, show, store, update } from '../../../controllers/postController.js';
import { createPostValidation, updatePostValidation } from '../../../validations/postValidation.js';
import { referenceValidation } from '../../../validations/reference.js';
const router = express.Router();

router.get('/', index);
router.get('/:id', show);
router.post('/', createPostValidation , referenceValidation , store);
router.put('/:id', updatePostValidation, update);
router.delete('/:id', forceDeletePost);

export default router;
