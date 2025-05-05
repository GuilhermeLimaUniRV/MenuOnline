import React from 'react';
import './DishCard.css';

export function DishCard({
  nome,
  descricao,
  preco,
  imagemBase64 = '',
  onAdd = () => {},
  onRemove = () => {}
}) {
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
              aria-label={`Remover ${nome}`}
              onClick={onRemove}
            >
              –
            </button>
            <button
              className="dish-card__btn"
              aria-label={`Adicionar ${nome}`}
              onClick={onAdd}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
