import express from 'express';
import { getMenu } from '../controllers/menuController.js';

const router = express.Router();
router.get('/', getMenu); // Rota GET /api/menu

export default router;