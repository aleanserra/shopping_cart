import React from "react";
import { Product } from "../../interfaces/products.interface";
import { useProducts } from "../../service/hooks/useProducts";
import ProductCard from "../ProductCard";
import { Container, ProductsSection } from "./ProductList.styles";

interface ProductListProps {
  onOpenNewTransactionModal: () => void;
}

export default function ProductList({
  onOpenNewTransactionModal,
}: ProductListProps) {
  const { data: products, isLoading, error } = useProducts();
  return (
    <Container>
      <main>
        {isLoading ? (
          <p>
            <strong>Loading...</strong>
          </p>
        ) : error ? (
          <p>
            <strong>Please refresh the page.</strong>
          </p>
        ) : (
          <ProductsSection>
            {products
              ? products.map((product: Product) => {
                  return (
                    <div key={product.id}>
                      <ProductCard
                        onOpenNewTransactionModal={onOpenNewTransactionModal}
                        productName={product.productName}
                        image={product.image}
                        amount={product.amount}
                        id={product.id}
                        quantity={product.quantity}
                      />
                    </div>
                  );
                })
              : []}
          </ProductsSection>
        )}
      </main>
    </Container>
  );
}
