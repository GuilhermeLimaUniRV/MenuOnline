import React, { useState } from 'react';
import { useCarrinho } from '../context/CarrinhoContext';
import './Cart.css'
import { useNavigate } from 'react-router-dom'; // Importe o hook
import { FiArrowLeft } from 'react-icons/fi';
import { ConfirmarPedido } from '../components/ConfirmarPedido';


const Carrinho = () => {
  const {
    carrinho,
    removerItem,
    ajustarQuantidade,
    valorTotal,
    valorComDesconto,
    cupom,
    descontoAplicado,
    aplicarCupom,
    removerCupom
  } = useCarrinho();

  const navigate = useNavigate(); // Inicialize o hook
  const [codigoCupom, setCodigoCupom] = useState('');
  const [mensagemCupom, setMensagemCupom] = useState('');

  const handleAplicarCupom = async () => {
    if (!codigoCupom.trim()) {
      setMensagemCupom('Por favor, digite um código de cupom');
      return;
    }

    const resultado = await aplicarCupom(codigoCupom);
    if (resultado.success) {
      setMensagemCupom(`Cupom aplicado: ${descontoAplicado}% de desconto!`);
      setCodigoCupom('');
    } else {
      setMensagemCupom(resultado.message);
    }
  };

  const handleRemoverCupom = () => {
    removerCupom();
    setMensagemCupom('Cupom removido com sucesso');
    setTimeout(() => setMensagemCupom(''), 3000);
  };

  return (
    <div className="carrinho">
      {/* Botão Voltar - Adicione no início do seu JSX */}
      <button onClick={() => navigate(-1)} className="btn-voltar">
        <FiArrowLeft size={18} /> Voltar
      </button>

      <h2>Carrinho de Compras</h2>

      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <>
          {carrinho.map(item => (
            <div key={item.id} className="item-carrinho">
              {item.imagemBase64 && (
                <img
                  src={item.imagemBase64}
                  alt={item.nome}
                  className="item-imagem"
                />
              )}
              <div className="item-info">
                <h3>{item.nome}</h3>
                <p>R$ {item.preco.toFixed(2)}</p>

                <div className="controles-quantidade">
                  <button
                    onClick={() => ajustarQuantidade(item.id, item.quantidade - 1)}
                    aria-label={`Reduzir quantidade de ${item.nome}`}
                  >
                    -
                  </button>
                  <span>{item.quantidade}</span>
                  <button
                    onClick={() => ajustarQuantidade(item.id, item.quantidade + 1)}
                    aria-label={`Aumentar quantidade de ${item.nome}`}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removerItem(item.id)}
                  className="btn-remover"
                  aria-label={`Remover ${item.nome} do carrinho`}
                >
                  Remover
                </button>
              </div>
            </div>
          ))}

          <div className="cupom-section">
            <div className="cupom-input-container">
              <input
                type="text"
                value={codigoCupom}
                onChange={(e) => {
                  setCodigoCupom(e.target.value);
                  setMensagemCupom('');
                }}
                placeholder="Digite seu cupom"
                aria-label="Código do cupom"
                disabled={!!cupom}
              />
              {!cupom ? (
                <button
                  onClick={handleAplicarCupom}
                  className="btn-aplicar"
                >
                  Aplicar
                </button>
              ) : (
                <button
                  onClick={handleRemoverCupom}
                  className="btn-remover-cupom"
                >
                  Remover
                </button>
              )}
            </div>
            {mensagemCupom && (
              <p className={`cupom-message ${cupom ? 'success' : 'error'}`}>
                {mensagemCupom}
              </p>
            )}
          </div>

          <div className="resumo-pedido">
            <div className="total-item">
              <span>Subtotal:</span>
              <span>R$ {valorTotal.toFixed(2)}</span>
            </div>

            {cupom && (
              <>
                <div className="total-item desconto">
                  <span>Desconto ({cupom.codigo}):</span>
                  <span>- {descontoAplicado}%</span>
                </div>
                <div className="total-item">
                  <span>Valor do desconto:</span>
                  <span>R$ {(valorTotal - valorComDesconto).toFixed(2)}</span>
                </div>
              </>
            )}

            <div className="total-final">
              <span>Total:</span>
              <span>R$ {cupom ? valorComDesconto.toFixed(2) : valorTotal.toFixed(2)}</span>
            </div>
          </div>
        </>
      )}
      <ConfirmarPedido />
    </div>
  );
};

export default Carrinho;