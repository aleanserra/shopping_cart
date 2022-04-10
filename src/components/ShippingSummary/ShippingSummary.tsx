import React, { useContext } from "react";
import { ShippingDetailContext } from "../../contexts/ShippingDetailContext";
import SuccessMessage from "../SuccessMessage";
import { Container } from "./ShippingSummary.styles";

export default function ShippingSummary() {
  const { shippingDetail } = useContext(ShippingDetailContext);
  return (
    <Container>
      <main>
        <SuccessMessage />
        <section>
          <h2>Shipping Summary</h2>
          <input disabled placeholder="Name" value={shippingDetail.name} />
          <input disabled placeholder="Email" value={shippingDetail.email} />
          <input
            disabled
            placeholder="Address"
            value={shippingDetail.address}
          />
          <input
            disabled
            placeholder="Postal code"
            value={shippingDetail.postalCode}
          />
          <input
            disabled
            placeholder="Country"
            value={shippingDetail.country}
          />
          <input disabled placeholder="Phone" value={shippingDetail.phone} />
        </section>
      </main>
    </Container>
  );
}
