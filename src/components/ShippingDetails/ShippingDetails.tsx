import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ShippingDetailContext } from "../../contexts/ShippingDetailContext";
import { ShippingDetail } from "../../interfaces/ShippingDetail.interface";
import { Container } from "./ShippingDetails.styles";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function ShippingDetails() {
  const { handleSetShippingDetail } = useContext(ShippingDetailContext);

  const router = useRouter();

  const { cart } = useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [showErrorForm, setShowErrorForm] = useState(false);

  const validateEmail = (email: string) => {
    return String(email).toLowerCase().match(EMAIL_REGEX);
  };

  function handleChangeName(event: any) {
    const { value } = event.target;
    setName(value);
  }

  function handleChangeEmail(event: any) {
    const { value } = event.target;
    setEmail(value);
  }

  function handleChangeAddress(event: any) {
    const { value } = event.target;
    setAddress(value);
  }

  function handleChangePostalCode(event: any) {
    const { value } = event.target;
    setPostalCode(value);
  }

  function handleChangeCountry(event: any) {
    const { value } = event.target;
    setCountry(value);
  }

  function handleChangePhone(event: any) {
    const { value } = event.target;
    setPhone(value);
  }

  function isFieldsEmpty(shippingDetail: ShippingDetail) {
    return (
      shippingDetail.name === "" ||
      shippingDetail.email === "" ||
      shippingDetail.address === "" ||
      shippingDetail.country === "" ||
      shippingDetail.phone === "" ||
      shippingDetail.country === ""
    );
  }

  function onPurchase() {
    if (
      !isFieldsEmpty({
        name,
        email,
        address,
        postalCode,
        country,
        phone,
      }) &&
      cart.length > 0 &&
      validateEmail(email)
    ) {
      handleSetShippingDetail({
        name,
        email,
        address,
        postalCode,
        country,
        phone,
      });
      //TODO fetch purshase API
      router.push("/success");
    } else {
      setShowErrorForm(true);
      //TODO show error
    }
  }

  return (
    <Container>
      <main>
        <form>
          <h2>Shipping detail</h2>
          <input placeholder="Name" value={name} onChange={handleChangeName} />
          <input
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
          />
          <input
            placeholder="Address"
            value={address}
            onChange={handleChangeAddress}
          />
          <input
            placeholder="Postal code"
            value={postalCode}
            onChange={handleChangePostalCode}
          />
          <input
            placeholder="Country"
            value={country}
            onChange={handleChangeCountry}
          />
          <input
            placeholder="Phone"
            value={phone}
            onChange={handleChangePhone}
          />
          {showErrorForm && <p>Complete all the fields correctly.</p>}
          <button type="button" onClick={onPurchase}>
            Purchase
          </button>
        </form>
      </main>
    </Container>
  );
}
