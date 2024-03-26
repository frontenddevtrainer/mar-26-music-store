"use client";

import { IAlbum } from "@/lib/interface/album";
import { createContext, useContext, useEffect, useState } from "react";

export interface CartContext {
  items: IAlbum[];
  addToCart(album: IAlbum): void;
  removeFromCart(album: IAlbum): void;
}

const CartContext = createContext<CartContext>({
  items: [],
  addToCart() {},
  removeFromCart() {},
});

const { Provider } = CartContext;

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<IAlbum[]>([]);

  useEffect(() => {
    const cartString = window.localStorage.getItem("cart") || "";
    setItems(JSON.parse(cartString) as IAlbum[]);
  }, []);

  const addToCart = (album: IAlbum) => {
    const updateCart = [...items, album];
    setItems(updateCart);
    window.localStorage.setItem("cart", JSON.stringify(updateCart));
  };

  const removeFromCart = (album: IAlbum) => {
    // setItems([...items, album]);
  };

  return (
    <Provider value={{ items, addToCart, removeFromCart }}>{children}</Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
