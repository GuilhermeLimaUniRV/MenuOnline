import React from 'react';
import './SearchBar.css';
import { FiSearch } from 'react-icons/fi'

export function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="search"
        className="search-bar__input"
        placeholder="🔍 Pesquisar"
        value={value}
        onChange={e => onChange(e.target.value)}
        aria-label="Buscar pratos"
      />
    </div>
  );
}
