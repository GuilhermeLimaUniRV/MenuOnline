import supabase from '../config/db.js';

// Listar todas as categorias
export const getCategorias = async () => {
  const { data, error } = await supabase
    .from('categorias')
    .select('*')
    .order('nome', { ascending: true });

  if (error) throw new Error(error.message);
  return data;
};

// Criar nova categoria
export const createCategoria = async (nome) => {
  const { data, error } = await supabase
    .from('categorias')
    .insert({ nome })
    .select();

  if (error) throw new Error(error.message);
  return data[0];
};