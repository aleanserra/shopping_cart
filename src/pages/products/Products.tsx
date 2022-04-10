import { Container } from "./Products.styles";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import ProductList from "../../components/ProductList/ProductList";
import CartItems from "../../components/CartItems";
import Modal from "react-modal";
import ProductVariantModal from "../../components/ProductVariantModal";

Modal.setAppElement("#__next");

export default function Products() {
  const [isVariantProductModalOpen, setIsVariantProductModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsVariantProductModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsVariantProductModalOpen(false);
  }

  return (
    <Container>
      <NavBar />
      <ProductList onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <CartItems />
      <ProductVariantModal
        isOpen={isVariantProductModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </Container>
  );
}
