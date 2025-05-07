import express from 'express';
import cupomController from '../controllers/cupomController.js';

const router = express.Router();

// Rota: GET /cupons/:codigo
router.get('/:codigo', cupomController.buscarPorCodigo);

export default router;