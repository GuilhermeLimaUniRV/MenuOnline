import express from 'express';
import {
  listarCategorias,
  criarCategoria
} from '../controllers/categoriaController.js';

const router = express.Router();

router.get('/', listarCategorias);
router.post('/', criarCategoria);

export default router;