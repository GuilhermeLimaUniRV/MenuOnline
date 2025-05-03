import express from 'express';
import {
  listarPratos,
  criarPrato,
  atualizarPrato
} from '../controllers/pratoController.js';

const router = express.Router();

router.get('/', listarPratos);
router.post('/', criarPrato);
router.put('/:id', atualizarPrato);

export default router;