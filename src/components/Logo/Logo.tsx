import { useRouter } from "next/router";
import React from "react";
import { Container } from "./Logo.styles";

export default function Logo() {
  const router = useRouter();

  return (
    <Container>
      <h2 onClick={() => router.push("/products")}>
        PRODU<span>CTS</span>
      </h2>
    </Container>
  );
}
