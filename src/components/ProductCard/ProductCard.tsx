import Image from "next/image";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Container } from "./ProductCard.styles";

interface ProductCardProps {
  quantity: number;
  id: number;
  productName: string;
  amount: string;
  image: string;
  onOpenNewTransactionModal: () => void;
}

export default function ProductCard({
  id,
  productName,
  amount,
  image,
  quantity,
  onOpenNewTransactionModal,
}: ProductCardProps) {
  const { handleSetItemSelected } = useContext(CartContext);

  function onAddItem() {
    handleSetItemSelected({ quantity, id, productName, amount, image });
    onOpenNewTransactionModal();
  }

  return (
    <Container>
      <Image src={image} alt={productName} width={640} height={480} />
      <h1>{productName}</h1>
      <h2>€{amount}</h2>
      <button onClick={() => onAddItem()}>ADD TO CART</button>
    </Container>
  );
}
