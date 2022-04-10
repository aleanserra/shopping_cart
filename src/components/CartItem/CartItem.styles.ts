import styled from "styled-components";

export const Container = styled.div`
  li {
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
    background: white;

    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    align-items: center;

    padding: 2rem;
    border-radius: 0.75 rem;
    @media (max-width: 500px) {
      h2 {
        font-size: 1rem;
      }
      span {
        font-size: 0.75rem;
      }
      button {
        font-size: 0.75rem;
      }
    }
  }
  button {
    border: 3px solid #008cba;
    background: transparent;
    color: #008cba;
    font-weight: bold;
    &:hover {
      color: white;
      background: #008cba;
    }
  }
`;
