import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';  // Para capturar e atualizar a URL
import api from '../services/api';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { MenuList } from '../components/MenuList';

// Importando o ícone de seta (ou outro ícone de sua preferência)
import { IoArrowBack } from 'react-icons/io5';  

export default function Cardapio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelected] = useState('Menu completo');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();  // Para atualizar a URL e navegar para a Home
  const location = useLocation();  // Captura a URL atual

  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get('category');  // Captura o valor do parâmetro 'category' da URL

  // Atualiza a categoria selecionada com o parâmetro da URL, se disponível
  useEffect(() => {
    if (categoryFromUrl) {
      setSelected(categoryFromUrl);  // Se houver parâmetro, usa ele para definir a categoria
    }
  }, [categoryFromUrl]);

  useEffect(() => {
    async function fetchCats() {
      try {
        const res = await api.get('/categorias');
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

  // Função que altera a categoria e atualiza a URL
  const handleCategorySelect = (category) => {
    setSelected(category);  // Atualiza o estado da categoria selecionada
    navigate(`/cardapio?category=${category}`);  // Atualiza a URL com o parâmetro da categoria
  };

  // Função de navegação para voltar para a página Home
  const goToHome = () => {
    navigate('/');  // Navega para a Home
  };

  return (
    <div>
      {/* Botão de Voltar para a Home acima do Header */}
      <button onClick={goToHome} className="back-to-home-btn">
        <IoArrowBack size={24} /> {/* Ícone de seta para voltar */}
      </button>

      <Header name={"Menu Online"}></Header>
      
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={handleCategorySelect}  // Passa a função de atualização de categoria
      />
      <MenuList
        searchTerm={searchTerm}
        category={selectedCategory}  // Passa a categoria selecionada para MenuList
      />
    </div>
  );
}
