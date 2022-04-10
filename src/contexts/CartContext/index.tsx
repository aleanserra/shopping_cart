import { createContext, ReactNode, useState } from "react";
import { Product } from "../../interfaces/products.interface";
import {
  CartContextData,
  CartProviderProps,
} from "../../interfaces/useCart.interface";

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);
  const [itemSelected, setItemSelected] = useState<Product>({} as Product);

  function handleAddItemToCart(product: Product) {
    setCart([...cart, product]);
  }

  function handleRemoveItemFromCart(clickedItemIndex: number) {
    const filteredCart = cart.filter(
      (cartItem: Product) => cart.indexOf(cartItem) !== clickedItemIndex
    );
    setCart(filteredCart);
  }

  function clearCart() {
    setCart([]);
  }

  function handleSetItemSelected(product: Product) {
    setItemSelected(product);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddItemToCart,
        handleRemoveItemFromCart,
        clearCart,
        itemSelected,
        handleSetItemSelected,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
