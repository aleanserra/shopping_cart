import { useRouter } from "next/router";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartItemsProps } from "../../interfaces/CartItems.interface";
import { Product } from "../../interfaces/products.interface";
import { Container } from "./CartItem.styles";

export default function CartItem({
  productName,
  itemIndex,
  amount,
  quantity,
}: CartItemsProps) {
  const { handleRemoveItemFromCart } = useContext(CartContext);
  const router = useRouter();

  return (
    <Container>
      <li>
        <h2>{productName}</h2>
        <span>Quantity: {quantity}</span>
        <span>€{(+amount * quantity).toFixed(2)}</span>
        {router.pathname !== "/success" && (
          <button onClick={() => handleRemoveItemFromCart(itemIndex)}>
            REMOVE
          </button>
        )}
      </li>
    </Container>
  );
}
