import styled from "styled-components";

export const Container = styled.div`
  main {
    margin-top: 15vh;
    width: 100%;
    min-height: 60vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #f8f7f7;
    z-index: 1;
  }
`;

export const ProductsSection = styled.section`
  max-width: 100vw;
  width: 90%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding-bottom: 3rem;

  @media (max-width: 1270px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
