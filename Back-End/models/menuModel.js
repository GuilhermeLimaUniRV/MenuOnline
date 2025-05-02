import supabase from '../config/db.js';

export const getAllMenus = async () => {
    const { data, error } = await supabase
      .from('pratos')
      .select(`
        id,
        nome,
        descricao,
        preco,
        disponivel,
        imagem_base64,
        categorias (nome)
      `)
      .eq('disponivel', true)
      .order('nome', { ascending: true });
  
    if (error) throw new Error(error.message);
    return data;
  };