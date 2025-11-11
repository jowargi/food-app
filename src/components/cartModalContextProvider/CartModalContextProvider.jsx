import { createContext, useCallback, useContext, useState } from "react";

const CartModalContext = createContext({
  isCartVisible: null,
  openCart: () => null,
  closeCart: () => null,
});

export const useCartModalContext = () => useContext(CartModalContext);

export default function CartModalContextProvider({ children }) {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const openCart = useCallback(() => setIsCartVisible(true), []);
  const closeCart = useCallback(() => setIsCartVisible(false), []);

  return (
    <CartModalContext.Provider value={{ isCartVisible, openCart, closeCart }}>
      {children}
    </CartModalContext.Provider>
  );
}
