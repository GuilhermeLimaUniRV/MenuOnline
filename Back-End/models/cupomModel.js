import supabase from '../config/db.js';

class cupomModel {
    static async buscarPorCodigo(codigo) {
      const { data, error } = await supabase
        .from('cupons')
        .select('*')
        .eq('codigo', codigo)
        .eq('ativo', true)
        .maybeSingle(); // ✅ Usar maybeSingle() em vez de single()
  
      if (error) throw error;
      return data; // Retorna `null` se nenhum registro for encontrado
    }
  }

export default cupomModel;