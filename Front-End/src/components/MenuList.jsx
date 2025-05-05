import React, { useEffect, useState } from 'react';
import api from '../services/api';       // sua instância Axios
import { DishCard } from './DishCard';
import './MenuList.css';

export function MenuList({ searchTerm = '' }) {
  const [dishes, setDishes]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

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
  if (error)   return <p className="menu-list__status">Erro: {error.message}</p>;

  // filtra case-insensitive por 'nome'
  const filtered = dishes.filter(d =>
    d.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
