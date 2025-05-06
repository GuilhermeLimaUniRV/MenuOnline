import express from 'express';
import {
  listarPratos,
  criarPrato,
  atualizarPrato,
  getTopDishes
} from '../controllers/pratoController.js';

const router = express.Router();

router.get('/mais-pedidos', getTopDishes);
router.get('/', listarPratos);
router.post('/', criarPrato);
router.put('/:id', atualizarPrato);

export default router;