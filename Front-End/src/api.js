import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
export const getPratos = async () => {
    try {
      const response = await api.get('/pratos-populares'); // Endpoint da sua API
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar pratos populares:', error);
      return []; // Retorna array vazio em caso de erro
    }
  };
  

export default api;