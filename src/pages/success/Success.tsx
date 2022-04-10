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

  useEffect(() => {
    return () => {
      console.log("WHY CLEANUP");
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
