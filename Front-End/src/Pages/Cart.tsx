import React, { useState } from 'react';

export default function Cart() {
  // Estado para os itens do carrinho
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      nome: 'Carbonara da casa',
      preco: 42.00,
      quantidade: 2,
      imagem: 'image_url',  // Substitua pela URL real da imagem
    },
    {
      id: 2,
      nome: 'Pizza Margherita',
      preco: 40.00,
      quantidade: 3,
      imagem: 'image_url',  // Substitua pela URL real da imagem
    },
  ]);

  const [discountCode, setDiscountCode] = useState(''); // Código do cupom
  const [discount, setDiscount] = useState(0); // Valor do desconto

  // Função para calcular o total do carrinho
  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    return total - (total * discount); // Aplica o desconto no total
  };

  // Função para aplicar o cupom
  const applyDiscount = () => {
    if (discountCode === 'DESCONTO10') {
      setDiscount(0.1); // 10% de desconto
    } else {
      setDiscount(0); // Caso o cupom não seja válido
    }
  };

  // Função para alterar a quantidade dos itens
  const updateQuantity = (id, action) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantidade: action === 'increment' ? item.quantidade + 1 : item.quantidade - 1 }
          : item
      )
    );
  };

  return (
    <div className="cart">
      <h1>CARRINHO</h1>

      {/* Lista de itens no carrinho */}
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.imagem} alt={item.nome} className="cart-item-image" />
            <div className="cart-item-details">
              <p>{item.nome}</p>
              <p>R$ {item.preco.toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, 'decrement')}>-</button>
                <span>QTD: {item.quantidade}</span>
                <button onClick={() => updateQuantity(item.id, 'increment')}>+</button>
              </div>
              <p>Total: R$ {(item.preco * item.quantidade).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Campo de cupom de desconto */}
      <div className="discount-section">
        <input
          type="text"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          placeholder="Insira aqui o código do cupom"
        />
        <button onClick={applyDiscount}>Validar</button>
      </div>

      {/* Exibição do total e desconto */}
      <div className="total-section">
        <p>Total: R$ {calculateTotal().toFixed(2)}</p>
        {discount > 0 && <p>Desconto: R$ {(calculateTotal() * discount).toFixed(2)}</p>}
      </div>

      {/* Botões de ação */}
      <button className="confirm-btn">Confirmar Pedido</button>
      <button className="back-btn">Voltar ao cardápio</button>
    </div>
  );
}
