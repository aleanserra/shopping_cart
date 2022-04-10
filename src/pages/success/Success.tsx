import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import CartItems from "../../components/CartItems";
import NavBar from "../../components/NavBar";
import ShippingSummary from "../../components/ShippingSummary";
import SuccessMessage from "../../components/SuccessMessage";
import { CartContext } from "../../contexts/CartContext";
import { ShippingDetailContext } from "../../contexts/ShippingDetailContext";
import { Container } from "./Success.styles";

export default function Success() {
  const { clearCart } = useContext(CartContext);
  const { clearShippingDetail } = useContext(ShippingDetailContext);

  const router = useRouter();

  useEffect(() => {
    return () => {
      if (router.pathname === "/success") {
        console.log("WHY CLEANUP");
      }
      // clearCart();
      // clearShippingDetail();
    };
  }, []);

  return (
    <Container>
      <NavBar />
      <ShippingSummary />
      <CartItems />
    </Container>
  );
}
