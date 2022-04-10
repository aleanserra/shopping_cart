import CartItems from "../../components/CartItems";
import NavBar from "../../components/NavBar";
import ShippingDetails from "../../components/ShippingDetails";
import { Container } from "./Checkout.styles";

export default function Checkout() {
  return (
    <Container>
      <NavBar />
      <ShippingDetails />
      <CartItems />
    </Container>
  );
}
