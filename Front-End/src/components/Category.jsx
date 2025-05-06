import React, { useState, useEffect } from 'react';
import api from '../services/api';  // Importando o axios para fazer a requisição
import { useNavigate } from 'react-router-dom';  // Novo hook para navegação no react-router-dom v6
import './Category.css';  // CSS para o componente

export function Category() {
  const [categories, setCategories] = useState([]);  // Estado para armazenar as categorias
  const [loading, setLoading] = useState(true);  // Estado de carregamento
  const [error, setError] = useState(null);  // Estado para erro
  const navigate = useNavigate();  // Usando useNavigate para navegação no React Router v6

  // Função para buscar categorias da API
  const fetchCategories = async () => {
    try {
      const response = await api.get('/categorias');  // URL da API para categorias
      setCategories(response.data);  // Atualiza o estado com os dados das categorias
    } catch (err) {
      console.error('Erro ao carregar categorias:', err);
      setError('Não foi possível carregar as categorias');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();  // Chama a função para buscar as categorias
  }, []);

  // Função para lidar com o clique em uma categoria
  const handleCategoryClick = (category) => {
    navigate(`/cardapio?category=${category}`);  // Redireciona para o Cardápio com o filtro da categoria
  };

  // Condicional para exibir status de carregamento ou erro
  if (loading) return <p>Carregando categorias...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h1 className='title'>Categorias</h1>
      <div className="categories">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => handleCategoryClick(category.nome)}  // Ao clicar, filtra por categoria
          >
            <div className="category-icon">
              <img src={category.imagem_base64} alt={category.nome} />
            </div>
            <span>{category.nome}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
