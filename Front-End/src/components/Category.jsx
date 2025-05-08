import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import './Category.css';

export function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchCategories = async () => {
    try {
      const response = await api.get('/categorias');
      setCategories(response.data);
    } catch (err) {
      console.error('Erro ao carregar categorias:', err);
      setError('Não foi possível carregar as categorias. Tente recarregar a página.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/cardapio?category=${encodeURIComponent(category)}`);
  };

  if (loading) return (
    <div className="loading-message">
      <p>Carregando categorias...</p>
    </div>
  );

  if (error) return (
    <div className="error-message">
      <p>{error}</p>
      <button 
        onClick={fetchCategories}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          background: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Tentar novamente
      </button>
    </div>
  );

  return (
    <section className="categories-section">
      <h1 className="categories-title">Categorias</h1>
      <div className="categories-container">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => handleCategoryClick(category.nome)}
            aria-label={`Ver ${category.nome}`}
          >
            <div className="category-image-container">
              <img 
                src={category.imagem_base64} 
                alt={category.nome}
                className="category-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/200?text=Sem+Imagem';
                }}
              />
            </div>
            <h2 className="category-name">{category.nome}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}