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

  form {
    h2 {
      margin-bottom: 1rem;
    }
    button {
      margin-top: 1rem;
    }
    width: 100%;
    max-width: 700px;
    padding: 40px;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  }
  p {
    color: red;
    margin-top: 1rem;
  }
`;
