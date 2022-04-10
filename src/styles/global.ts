import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        color: #333;
        /* background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text}; */
        font: 400 16px Roboto, sans-serif;
    }

    button {
        border: none;
        padding: 0 2rem;

        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        
        background: #008CBA;
        border-radius: 0.75rem;

        cursor: pointer;

        color: white;
        font: inherit;

        transition: 0.5s;
        outline: none;
    }

    button:hover{
        color: #008CBA;
        background: white
    }

    button[disabled] {
        opacity: 0.6;
        cursor: not-allowed
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: #f8f7f7;
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    font-size: 1rem;
    margin-top: 1.5rem;
  }
`;

export const ReactModalClose = styled.span`
  position: absolute;
  height: 1.5rem;
  right: 3rem;
  top: 1.5rem;
  border: 0;
  background: transparent;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
