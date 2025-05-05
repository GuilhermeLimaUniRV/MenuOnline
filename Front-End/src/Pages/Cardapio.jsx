import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { Header }         from '../components/Header';
import { SearchBar }      from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { MenuList }       from '../components/MenuList';

export default function Cardapio() {
  const [searchTerm, setSearchTerm]     = useState('');
  const [selectedCategory, setSelected] = useState('Menu completo');
  const [categories, setCategories]     = useState([]);

  useEffect(() => {
    async function fetchCats() {
      try {
        const res = await api.get('/categorias');
        // res.data === [{id, nome, imagem_base64}, …]
        setCategories([
          { id: 0, nome: 'Menu completo', imagem_base64: null },
          ...res.data
        ]);
      } catch (err) {
        console.error('Erro ao carregar categorias:', err);
      }
    }
    fetchCats();
  }, []);

  return (
    <div>
      <Header />
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelected}
      />
      <MenuList
        searchTerm={searchTerm}
        category={selectedCategory}
      />
    </div>
  );
}
