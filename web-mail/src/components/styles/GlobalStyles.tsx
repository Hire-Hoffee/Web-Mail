import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.body};
    color:  ${({ theme }) => theme.text.primary};
  }
  
  a {
    text-decoration: none;
    color: unset;
  }
`;

export default GlobalStyles;
