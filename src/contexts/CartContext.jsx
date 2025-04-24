import { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCarts] = useLocalStorage('s11g1', []);

  const addItem = (item) => {
    setCarts([...cart, item]);
  };

  const removeItem = (item) => {
    setCarts(cart.filter((ix, index) => item != index));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
