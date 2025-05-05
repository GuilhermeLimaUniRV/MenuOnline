import React from 'react';
import './DishCard.css';

export function DishCard({ nome, preco, imagemBase64 }) {
  // Garante que a string seja um data URI
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
        <p className="dish-card__price">R$ {preco.toFixed(2)}</p>
      </div>
    </div>
  );
}
