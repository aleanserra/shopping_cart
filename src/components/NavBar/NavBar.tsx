import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Logo from "../Logo";
import {
  Container,
  NavBarActions,
  NavBarDetail,
  NavBarDetailPrice,
  NavBarDetailQuantity,
  ProceedButton,
} from "./NavBar.styles";

export default function NavBar() {
  const router = useRouter();
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (acc, current) => acc + +current.amount * current.quantity,
    0
  );
  const totalItems = cart.reduce((acc, current) => acc + +current.quantity, 0);

  return (
    <Container>
      <header>
        <nav>
          <Logo />
          <NavBarActions>
            {router.pathname !== "/success" && (
              <NavBarDetail>
                <NavBarDetailQuantity>
                  {totalItems} {totalItems === 1 ? "produc" : "products"}
                </NavBarDetailQuantity>
                <NavBarDetailPrice>$ {totalPrice.toFixed(2)}</NavBarDetailPrice>
              </NavBarDetail>
            )}
            {(router.pathname === "/products" || router.pathname === "/") && (
              <ProceedButton
                onClick={() => router.push("/checkout")}
                disabled={cart.length === 0}
              >
                Proceed
              </ProceedButton>
            )}
          </NavBarActions>
        </nav>
      </header>
    </Container>
  );
}
