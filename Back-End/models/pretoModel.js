import supabase from '../config/db.js';

// Listar todos os pratos (com filtro de disponibilidade)
export const getPratos = async () => {
  const { data, error } = await supabase
    .from('pratos')
    .select(`
      id,
      nome,
      descricao,
      preco,
      imagem_base64,
      disponivel,
      categoria_id,
      categorias (nome)
    `)
    .eq('disponivel', true)
    .order('nome', { ascending: true });

  if (error) throw new Error(error.message);
  return data;
};

// Criar novo prato
export const createPrato = async (dados) => {
  const { data, error } = await supabase
    .from('pratos')
    .insert(dados)
    .select();

  if (error) throw new Error(error.message);
  return data[0];
};

// Atualizar prato
export const updatePrato = async (id, dados) => {
  const { data, error } = await supabase
    .from('pratos')
    .update(dados)
    .eq('id', id)
    .select();

  if (error) throw new Error(error.message);
  return data[0];
};