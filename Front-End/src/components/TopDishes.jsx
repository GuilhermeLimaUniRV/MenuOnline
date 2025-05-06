import { useState, useEffect } from "react";
import api from "../services/api";  // Importa o Axios configurado no arquivo api.js
import { DishCard } from "../components/DishCard";  // Componente que exibe os pratos
import './TopDishes.css';  // Seu CSS de estilos (se necessário)

export function TopDishes() {
  const [popularDishes, setPopularDishes] = useState([]);  // Estado para armazenar os pratos
  const [loading, setLoading] = useState(true);  // Estado para mostrar carregando
  const [error, setError] = useState(null);  // Estado para lidar com erros

  // Função para buscar os pratos mais pedidos da API
  const fetchPopularDishes = async () => {
    try {
      const response = await api.get('/pratos/mais-pedidos');  // Requisição para a API de "Mais Pedidos"
      setPopularDishes(response.data);  // Atualiza o estado com os dados recebidos
    } catch (err) {
      console.error('Erro ao carregar pratos:', err);
      setError('Não foi possível carregar os pratos');  // Em caso de erro, configura o erro
    } finally {
      setLoading(false);  // Define o estado de carregamento como false
    }
  };

  // Chama a função para buscar os pratos assim que o componente for montado
  useEffect(() => {
    fetchPopularDishes();  // Chama a função de busca ao montar o componente
  }, []);  // A função é chamada apenas uma vez, ao carregar o componente

  // Condicional para exibir o estado de carregamento ou erro
  if (loading) return <p className="top-dishes__status">Carregando pratos mais pedidos...</p>;
  if (error) return <p className="top-dishes__status">Erro: {error}</p>;

  
  return (
    <section className="top-dishes">
      <h2>Mais Pedidos</h2>
      <div className="more-ordered">
        {popularDishes.length > 0 ? (
          popularDishes.map((dish) => (
            <DishCard
              key={dish.id}
              nome={dish.nome}
              preco={dish.preco}
              imagemBase64={dish.imagem_base64}
              showDescription={false}  // Passa showDescription como false para ocultar a descrição
              onAdd={() => console.log(`Adicionado: ${dish.nome}`)}  // Placeholder para adicionar
              onRemove={() => console.log(`Removido: ${dish.nome}`)}  // Placeholder para remover
            />
          ))
        ) : (
          <p className="top-dishes__empty">Nenhum prato encontrado.</p>
        )}
      </div>
    </section>
  );
}
