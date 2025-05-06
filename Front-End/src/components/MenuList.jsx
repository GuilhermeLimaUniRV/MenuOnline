import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';  // Para capturar parâmetros da URL
import api from '../services/api';
import { DishCard } from './DishCard';
import './MenuList.css';

export function MenuList({
  searchTerm = '',
  category = 'Menu completo'  // Fallback para "Menu completo", mas vai ser substituído pela URL
}) {
  const [dishes, setDishes] = useState([]);  // Estado para armazenar pratos
  const [loading, setLoading] = useState(true);  // Estado de carregamento
  const [error, setError] = useState(null);  // Estado para erro

  const location = useLocation();  // Pega a localização atual da URL
  const queryParams = new URLSearchParams(location.search);  // Extrai parâmetros da URL
  const categoryFromUrl = queryParams.get('category');  // Obtém o valor do parâmetro 'category'

  // Atualiza a categoria para o valor da URL, caso exista
  const activeCategory = categoryFromUrl || category;  // Se não houver categoria na URL, usa a categoria padrão

  useEffect(() => {
    async function fetchPratos() {
      try {
        const res = await api.get('/pratos');
        setDishes(res.data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchPratos();
  }, []);

  if (loading) return <p className="menu-list__status">Carregando pratos…</p>;
  if (error) return <p className="menu-list__status">Erro: {error.message}</p>;

  // Filtra os pratos com base no searchTerm e na categoria ativa
  const filtered = dishes
    .filter(d => d.nome.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(d => activeCategory === 'Menu completo' || d.categorias.nome === activeCategory); // Usa a categoria ativa

  return (
    <div className="menu-list">
      {filtered.length > 0
        ? filtered.map(dish => (
            <DishCard
              key={dish.id}
              nome={dish.nome}
              preco={dish.preco}
              imagemBase64={dish.imagem_base64}
            />
          ))
        : <p className="menu-list__empty">Nenhum prato encontrado.</p>
      }
    </div>
  );
}
