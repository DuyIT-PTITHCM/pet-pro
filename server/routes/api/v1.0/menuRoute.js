// routes/users.js
import express from 'express';
import { forceDeleteMenu, index, store, update } from '../../../controllers/menusController.js';
import { createMenuValidation, updateMenuValidation } from '../../../validations/menuValidation.js';
const router = express.Router();

router.get('/', index);
router.post('/', createMenuValidation, store);
router.put('/:id', updateMenuValidation, update);
router.delete('/:id', forceDeleteMenu);

export default router;
