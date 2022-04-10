import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
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

  const [enableClear, setEnableClear] = useState<boolean>(false);

  setTimeout(() => setEnableClear(true), 1000);

  useEffect(() => {
    return () => {
      if (enableClear) {
        clearCart();
        clearShippingDetail();
      }
    };
  }, [enableClear]);

  return (
    <Container>
      <NavBar />
      <ShippingSummary />
      <CartItems />
    </Container>
  );
}
