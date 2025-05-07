import React from 'react';
import { useCarrinho } from '../context/CarrinhoContext';

const Carrinho = () => {
  const { 
    carrinho, 
    removerItem, 
    ajustarQuantidade, 
    valorTotal 
  } = useCarrinho();

  return (
    <div className="carrinho">
      <h2>Carrinho de Compras</h2>
      
      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <>
          {carrinho.map(item => (
            <div key={item.id} className="item-carrinho">
              {item.imagemBase64 && (
                <img 
                  src={item.imagemBase64.startsWith('data:') 
                    ? item.imagemBase64 
                    : `data:image/jpeg;base64,${item.imagemBase64}`} 
                  alt={item.nome}
                  className="item-imagem"
                />
              )}
              <div className="item-info">
                <h3>{item.nome}</h3>
                <p>R$ {item.preco.toFixed(2)}</p>
                
                <div className="controles-quantidade">
                  <button onClick={() => ajustarQuantidade(item.id, item.quantidade - 1)}>
                    -
                  </button>
                  <span>{item.quantidade}</span>
                  <button onClick={() => ajustarQuantidade(item.id, item.quantidade + 1)}>
                    +
                  </button>
                </div>
                
                <button 
                  onClick={() => removerItem(item.id)}
                  className="btn-remover"
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
          
          <div className="total">
            <h3>Total: R$ {valorTotal.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrinho;