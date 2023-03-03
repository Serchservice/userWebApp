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

  body div#menu-gender div{
    box-shadow: none;
    /* background: #FDFDFD; */
    margin-top: -4px;
    border: 2px solid #740274;
    border-radius: 0px 0px 10px 10px;
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

  li{
    list-style: none;
  }
  
`;

export default GlobalStyles;
