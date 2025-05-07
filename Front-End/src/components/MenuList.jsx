import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../services/api';
import { DishCard } from './DishCard';
import './MenuList.css';

export function MenuList({ searchTerm = '', category = 'Menu completo' }) {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get('category');
  const activeCategory = categoryFromUrl || category;

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

  const filtered = dishes
    .filter(d => d.nome.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(d => activeCategory === 'Menu completo' || d.categorias.nome === activeCategory);

  return (
    <div className="menu-list">
      {filtered.length > 0
        ? filtered.map(dish => (
            <DishCard
              key={dish.id}
              id={dish.id}
              nome={dish.nome}
              descricao={dish.descricao}
              preco={dish.preco}
              imagemBase64={dish.imagem_base64}
            />
          ))
        : <p className="menu-list__empty">Nenhum prato encontrado.</p>
      }
    </div>
  );
}