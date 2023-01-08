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
  
  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.body};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.text.secondary};
    border-radius: 3px;
  }
`;

export default GlobalStyles;
