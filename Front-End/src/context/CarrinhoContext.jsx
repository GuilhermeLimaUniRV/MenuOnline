import React, { createContext, useState, useContext } from 'react';
import api from '../services/api';

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
  // Adicione estas funções ao seu CarrinhoProvider
  const [cupom, setCupom] = useState(null);
  const [descontoAplicado, setDescontoAplicado] = useState(0);

  const aplicarCupom = async (codigoCupom) => {
    try {
      // Substitua por sua chamada à API que verifica o cupom
      const response = await api.get(`/cupons/${codigoCupom}`);
      const cupomValido = response.data;
      console.log(response)

      if (!cupomValido) {
        throw new Error('Cupom inválido');
      }

      // Verifica validade
      if (new Date(cupomValido.data_validade) < new Date()) {
        throw new Error('Cupom expirado');
      }

      setCupom(cupomValido);
      setDescontoAplicado(cupomValido.percentual_desconto);
      return { success: true, desconto: cupomValido.percentual_desconto };
    } catch (error) {
      setCupom(null);
      setDescontoAplicado(0);
      return { success: false, message: error.message };
    }
  };

  const valorComDesconto = valorTotal * (1 - descontoAplicado / 100);

  const confirmarPedido = async () => {
    try {
      if (carrinho.length === 0) {
        throw new Error('Carrinho vazio - adicione itens antes de confirmar');
      }

      const pedidoData = {
        itens: carrinho.map(item => ({
          prato_id: item.id,
          quantidade: item.quantidade,
          preco: item.preco
        })),
        total: valorComDesconto || valorTotal
      };

      const response = await api.post('/pedidos', pedidoData);

      // Limpa o carrinho após sucesso
      setCarrinho([]);
      setCupom(null);
      setDescontoAplicado(0);

      return { success: true, pedido: response.data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.error || error.message
      };
    }
  };

  return (
    <CarrinhoContext.Provider
      value={{
        confirmarPedido,
        cupom,
        descontoAplicado,
        aplicarCupom,
        valorComDesconto,
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