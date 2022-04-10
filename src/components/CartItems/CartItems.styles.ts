import styled from "styled-components";

export const Container = styled.div`
  footer {
    min-height: 20vh;
    padding: 2rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #ebebeb;

    ul {
      max-width: 900px;
      width: 90%;
      list-style: none;

      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

export const ClearButton = styled.button`
  max-width: 8rem;
  border: 3px solid #008cba;
  background: transparent;
  color: #008cba;
  font-weight: bold;
  &:hover {
    color: white;
    background: #008cba;
  }
`;

export const PurchasedProductsTitle = styled.h1`
  margin-bottom: 2rem;
`;
