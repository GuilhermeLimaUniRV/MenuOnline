import React from 'react';
import './SearchBar.css';
import { FiSearch } from 'react-icons/fi'

export function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
         <FiSearch className="search-bar__icon" size={20} />
      <input
        type="search"
        className="search-bar__input"
        placeholder="Buscar pratos..."
        value={value}
        onChange={e => onChange(e.target.value)}
        aria-label="Buscar pratos"
      />
    </div>
  );
}
