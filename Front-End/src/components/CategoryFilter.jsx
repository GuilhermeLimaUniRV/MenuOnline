import React from 'react';
import './CategoryFilter.css';

export function CategoryFilter({
  categories = [],   // array de objetos { id, nome, imagem_base64 }
  selected,          // string com o nome da categoria ativa
  onSelect           // função(nomeCategoria) => void
}) {
  return (
    <div className="category-filter">
      {categories.map(cat => (
        <button
          key={cat.id}
          className={[
            'category-filter__btn',
            selected === cat.nome && 'category-filter__btn--active'
          ].filter(Boolean).join(' ')}
          onClick={() => onSelect(cat.nome)}
        >
          {cat.nome}
        </button>
      ))}
    </div>
  );
}
