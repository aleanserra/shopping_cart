import { ReactNode } from "react";
import { Product } from "./products.interface";

export interface CartContextData {
  cart: Product[];
  handleAddItemToCart: (product: Product) => void;
  handleRemoveItemFromCart: (clickedItemIndex: number) => void;
  clearCart: () => void;
  handleSetItemSelected: (product: Product) => void;
  itemSelected: Product;
}
export interface CartProviderProps {
  children: ReactNode;
}
