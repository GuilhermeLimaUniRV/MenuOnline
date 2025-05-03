import supabase from '../config/db.js';

// Criar novo pedido
export const createPedido = async (pedidoData) => {
  const { data, error } = await supabase
    .from('pedidos')
    .insert({
      total: pedidoData.total,
      status: 'pendente'
    })
    .select();

  if (error) throw new Error(error.message);
  return data[0];
};

// Adicionar item ao pedido
export const addItemPedido = async (itemData) => {
  const { data, error } = await supabase
    .from('itens_pedido')
    .insert({
      pedido_id: itemData.pedido_id,
      prato_id: itemData.prato_id,
      quantidade: itemData.quantidade,
      preco: itemData.preco
    })
    .select();

  if (error) throw new Error(error.message);
  return data[0];
};