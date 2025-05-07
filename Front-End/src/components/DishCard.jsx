import React from 'react';
import './DishCard.css';
import { useCarrinho } from '../context/CarrinhoContext'; // Ajuste o caminho conforme sua estrutura

export function DishCard({ id, nome, descricao, preco, imagemBase64 }) {
  const { adicionarItem, ajustarQuantidade, carrinho } = useCarrinho();
  
  // Verifica se o prato já está no carrinho
  const itemNoCarrinho = carrinho.find(item => item.id === id);
  const quantidade = itemNoCarrinho ? itemNoCarrinho.quantidade : 0;

  const src = imagemBase64.startsWith('data:')
    ? imagemBase64
    : `data:image/jpeg;base64,${imagemBase64}`;

  return (
    <div className="dish-card">
      <div className="dish-card__image-wrapper">
        <img src={src} alt={nome} className="dish-card__image" />
      </div>
      <div className="dish-card__info">
        <h3 className="dish-card__name">{nome}</h3>
        <p className="dish-card__description">{descricao}</p>
        <div className="dish-card__footer">
          <p className="dish-card__price">R$ {preco.toFixed(2)}</p>
          <div className="dish-card__controls">
            <button
              className="dish-card__btn"
              aria-label={`Remover uma unidade de ${nome}`}
              onClick={() => ajustarQuantidade(id, quantidade - 1)}
              disabled={quantidade === 0}
            >
              –
            </button>
            {quantidade > 0 && <span className="dish-card__quantity">{quantidade}</span>}
            <button
              className="dish-card__btn"
              aria-label={`Adicionar uma unidade de ${nome}`}
              onClick={() => adicionarItem({
                id,
                nome,
                descricao,
                preco,
                imagemBase64
              })}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}