import React, { createContext, useState, useContext } from 'react';

const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarItem = (produto) => {
    setCarrinho((prev) => {
      const itemExistente = prev.find(item => item.id === produto.id);
      
      if (itemExistente) {
        return prev.map(item =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      
      return [...prev, { ...produto, quantidade: 1 }];
    });
  };

  const removerItem = (id) => {
    setCarrinho((prev) => prev.filter(item => item.id !== id));
  };

  const ajustarQuantidade = (id, quantidade) => {
    if (quantidade < 1) {
      removerItem(id);
      return;
    }

    setCarrinho((prev) =>
      prev.map(item =>
        item.id === id ? { ...item, quantidade } : item
      )
    );
  };

  const valorTotal = carrinho.reduce(
    (total, item) => total + (item.preco * item.quantidade), 
    0
  );

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarItem,
        removerItem,
        ajustarQuantidade,
        valorTotal
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => useContext(CarrinhoContext);