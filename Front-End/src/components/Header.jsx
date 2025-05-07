import React from 'react';
import './Header.css';
import CarrinhoButton from './CarrinhoButton';
import { useCarrinho } from '../context/CarrinhoContext';

export function Header({ name }) {
  const { carrinho } = useCarrinho();
  
  return (
    <header className="header">
      <h1 className="header__title">{name}</h1>
      <CarrinhoButton 
        itemCount={carrinho.reduce((total, item) => total + item.quantidade, 0)} 
      />
    </header>
  );
}