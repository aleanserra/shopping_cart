import Image from "next/image";
import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { Container } from "./ProductVariantModal.styles";
import close from "../../assets/close.svg";
import { ReactModalClose } from "../../styles/global";
import { CartContext } from "../../contexts/CartContext";

interface ProductVariantModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function ProductVariantModal({
  isOpen,
  onRequestClose,
}: ProductVariantModalProps) {
  const { handleAddItemToCart, itemSelected } = useContext(CartContext);
  const [quantity, setQuantity] = useState<number>(1);

  function handleChangeQuantity(event) {
    const { value } = event.target;
    setQuantity(value);
  }

  function onSave() {
    handleAddItemToCart({ ...itemSelected, quantity: quantity });
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onAfterOpen={() => setQuantity(1)}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ReactModalClose onClick={onRequestClose}>
        <Image src={close} alt="Close modal" className="react-modal-close" />
      </ReactModalClose>
      <Container>
        <h2>Variant</h2>
        <input
          value={quantity}
          onChange={(event) => handleChangeQuantity(event)}
          type="number"
          placeholder="Quantity"
        />
        <button onClick={onSave} disabled={quantity == 0} type="submit">
          Save
        </button>
      </Container>
    </Modal>
  );
}
