import { useRouter } from "next/router";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";
import {
  ClearButton,
  Container,
  PurchasedProductsTitle,
} from "./CartItems.styles";

export default function CartItems() {
  const { clearCart, cart } = useContext(CartContext);

  const router = useRouter();

  return (
    <Container>
      <footer>
        {cart.length > 0 && router.pathname !== "/success" ? (
          <ClearButton onClick={() => clearCart()}>Clear</ClearButton>
        ) : router.pathname === "/success" ? (
          <PurchasedProductsTitle>Purchased products</PurchasedProductsTitle>
        ) : null}
        <ul>
          {cart.map((cartItem, index) => (
            <CartItem
              quantity={cartItem.quantity}
              key={index}
              itemIndex={index}
              productName={cartItem.productName}
              amount={cartItem.amount}
            />
          ))}
        </ul>
      </footer>
    </Container>
  );
}
