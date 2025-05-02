import { getAllMenus } from '../models/menuModel.js';

export const getMenu = async (req, res) => {
  try {
    const pratos = await getAllMenus();
    res.status(200).json(pratos);
  } catch (error) {
    console.error('Erro no controller:', error.message); // Log mais claro
    res.status(500).json({ erro: 'Erro interno no servidor' }); // Mensagem genérica
  }
};