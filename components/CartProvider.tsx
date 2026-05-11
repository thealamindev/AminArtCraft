"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { products, type Product } from "@/lib/products";

export type CartItem = {
  slug: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  addItem: (slug: string) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  getProduct: (slug: string) => Product | undefined;
};

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "atelier-craft-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      setItems(JSON.parse(stored) as CartItem[]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    return {
      items,
      totalItems: items.reduce((total, item) => total + item.quantity, 0),
      addItem: (slug) => {
        setItems((current) => {
          const existing = current.find((item) => item.slug === slug);

          if (existing) {
            return current.map((item) =>
              item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item,
            );
          }

          return [...current, { slug, quantity: 1 }];
        });
      },
      removeItem: (slug) => setItems((current) => current.filter((item) => item.slug !== slug)),
      updateQuantity: (slug, quantity) => {
        setItems((current) =>
          current
            .map((item) => (item.slug === slug ? { ...item, quantity: Math.max(1, quantity) } : item))
            .filter((item) => item.quantity > 0),
        );
      },
      clearCart: () => setItems([]),
      getProduct: (slug) => products.find((product) => product.slug === slug),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
