import * as pedidoModel from '../models/pedidoModel.js';

// POST /api/pedidos
export const criarPedido = async (req, res) => {
  try {
    // Validação básica
    if (!req.body.itens || !req.body.total) {
      return res.status(400).json({ error: "Itens e total são obrigatórios" });
    }

    // Cria o pedido
    const novoPedido = await pedidoModel.createPedido({
      total: req.body.total
    });

    // Adiciona itens
    for (const item of req.body.itens) {
      await pedidoModel.addItemPedido({
        pedido_id: novoPedido.id,
        prato_id: item.prato_id,
        quantidade: item.quantidade,
        preco: item.preco
      });
    }

    res.status(201).json(novoPedido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};