import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: "Inria Sans", sans-serif;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    width: 100%;
  }

  button,
  input,
  textarea {
    border: none;
    outline: none;
    background-color: transparent;
  }

  button {
    cursor: pointer;
  }
  
`;

export default GlobalStyles;
