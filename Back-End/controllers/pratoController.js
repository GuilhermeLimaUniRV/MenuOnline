import * as pratoModel from '../models/pratoModel.js';
import supabase from '../config/db.js';

// GET /api/pratos
export const listarPratos = async (req, res) => {
  try {
    const pratos = await pratoModel.getPratos();
    res.json(pratos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST /api/pratos
export const criarPrato = async (req, res) => {
  try {
    // Validação básica
    if (!req.body.nome || req.body.preco === undefined) {
      return res.status(400).json({ error: "Nome e preço são obrigatórios" });
    }
    const novoPrato = await pratoModel.createPrato(req.body);
    res.status(201).json(novoPrato);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PUT /api/pratos/:id
export const atualizarPrato = async (req, res) => {
  try {
    const pratoAtualizado = await pratoModel.updatePrato(
      req.params.id,
      req.body
    );
    res.json(pratoAtualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getTopDishes = async (req, res) => {
  try {
    const pratos = await pratoModel.getTopDishes();  // Chamando o método do model
    res.status(200).json(pratos);  // Retorna os pratos no formato JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar pratos mais pedidos' });  // Se ocorrer erro, retorna o erro
  }
};