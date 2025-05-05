"use client";
import { createContext, useState, ReactNode } from "react";

type ProductType = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type CartContextType = {
  cartItems: ProductType[];
  addToCart: (item: ProductType) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void; // ✅ Added
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {}, // ✅ Added
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ProductType[]>([]);

  const addToCart = (item: ProductType) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
