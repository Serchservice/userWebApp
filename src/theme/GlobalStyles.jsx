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
`;

export default GlobalStyles;
