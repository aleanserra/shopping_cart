import styled from "styled-components";

export const Container = styled.div`
  header {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 15vh;

    background: #f8f7f7;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
    z-index: 10;
  }

  nav {
    max-width: 900px;
    width: 90%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 2rem;
      font-weight: normal;
      span {
        font-weight: bold;
      }
    }
  }
`;

export const NavBarActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 30%;
  @media (max-width: 395px) {
    min-width: 40%;
  }
`;

export const NavBarDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  min-width: 50%;
`;

export const NavBarDetailQuantity = styled.div`
  font-size: 1rem;
  @media (max-width: 395px) {
    font-size: 0.75rem;
  }
`;

export const NavBarDetailPrice = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  @media (max-width: 395px) {
    font-size: 1rem;
  }
`;

export const ProceedButton = styled.button`
  max-width: 8rem;
`;
