import * as categoriaModel from '../models/categoriaModel.js';

// GET /api/categorias
export const listarCategorias = async (req, res) => {
  try {
    const categorias = await categoriaModel.getCategorias();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST /api/categorias
export const criarCategoria = async (req, res) => {
  try {
    if (!req.body.nome) {
      return res.status(400).json({ error: "Nome é obrigatório" });
    }
    const novaCategoria = await categoriaModel.createCategoria(req.body.nome);
    res.status(201).json(novaCategoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};