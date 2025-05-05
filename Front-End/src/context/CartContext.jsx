import React, { createContext, useState } from 'react';

// 1) Cria o contexto
export const CartContext = createContext();

// 2) Provider que vai envolver toda a aplicação
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  // adiciona 1 unidade do prato
  function addItem(dish) {
    setItems(prev => {
      const exists = prev.find(i => i.id === dish.id);
      if (exists) {
        return prev.map(i =>
          i.id === dish.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...dish, qty: 1 }];
    });
  }

  // remove 1 unidade do prato (ou remove completamente se qty < 1)
  function removeItem(id) {
    setItems(prev =>
      prev
        .map(i => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter(i => i.qty > 0)
    );
  }

  // esvazia o carrinho, se precisar
  function clearCart() {
    setItems([]);
  }

  // subtotal calculado
  const subtotal = items.reduce((sum, i) => sum + i.preco * i.qty, 0);

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      clearCart,
      subtotal
    }}>
      {children}
    </CartContext.Provider>
  );
}
