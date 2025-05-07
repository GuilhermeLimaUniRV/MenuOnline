import React, { useState } from 'react';
import { useCarrinho } from '../context/CarrinhoContext';
import './ConfirmarPedido.css';

export function ConfirmarPedido() {
  const { 
    carrinho, 
    valorTotal, 
    valorComDesconto, 
    cupom, 
    confirmarPedido 
  } = useCarrinho();
  
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState(null);

  const handleConfirmar = async () => {
    setLoading(true);
    setMensagem(null);
    
    const resultado = await confirmarPedido();
    
    if (resultado.success) {
      setMensagem({ tipo: 'success', texto: 'Pedido confirmado com sucesso!' });
    } else {
      setMensagem({ tipo: 'error', texto: resultado.message });
    }
    
    setLoading(false);
  };

  if (carrinho.length === 0) return null;

  return (
    <div className="confirmar-pedido-container">
      <div className="resumo-pedido">
        <h3>Resumo do Pedido</h3>
        <p>Total de itens: {carrinho.reduce((total, item) => total + item.quantidade, 0)}</p>
        <p>Subtotal: R$ {valorTotal.toFixed(2)}</p>
        {cupom && (
          <p>Desconto ({cupom.codigo}): -{cupom.percentual_desconto}%</p>
        )}
        <p className="total">Total: R$ {(valorComDesconto || valorTotal).toFixed(2)}</p>
      </div>
      
      <button 
        onClick={handleConfirmar}
        className="btn-confirmar"
        disabled={loading}
      >
        {loading ? 'Enviando pedido...' : 'Confirmar Pedido'}
      </button>
      
      {mensagem && (
        <p className={`mensagem ${mensagem.tipo}`}>
          {mensagem.texto}
        </p>
      )}
    </div>
  );
}