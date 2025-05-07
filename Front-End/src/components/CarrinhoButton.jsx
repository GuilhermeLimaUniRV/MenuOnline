import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import './CarrinhoButton.css';

const CarrinhoButton = ({ itemCount = 0 }) => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate('/cart')}
      className="carrinho-btn"
      aria-label="Ver carrinho"
    >
      <FiShoppingCart className="carrinho-icon" />
      {itemCount > 0 && (
        <span className="carrinho-count">{itemCount}</span>
      )}
      <span className="carrinho-text">Ver Carrinho</span>
    </button>
  );
};

export default CarrinhoButton;