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

    .showSettings {
      animation-name: showSettings;
      animation-duration: 0.2s;
      animation-fill-mode: forwards;
    }
    .hideSettings {
      animation-name: hideSettings;
      animation-duration: 0.2s;
      animation-fill-mode: forwards;
    }

    @keyframes showSettings {
      from {
        visibility: hidden;
        height: 0px;
      }
      to {
        visibility: visible;
        height: 400px;
      }
    }
    @keyframes hideSettings {
      from {
        visibility: visible;
        height: 400px;
      }
      to {
        visibility: hidden;
        height: 0px;
      }
    }

    div {
      & > section:first-child {
        scale: 1;
      }
    }

    .scaleDown {
      animation-name: scaleDown;
      animation-duration: 0.2s;
      animation-fill-mode: forwards;
    }
    .scaleUp {
      animation-name: scaleUp;
      animation-duration: 0.2s;
      animation-fill-mode: forwards;
    }

    @keyframes scaleDown {
      from {
        scale: 1;
      }
      to {
        scale: 0.9;
      }
    }
    @keyframes scaleUp {
      from {
        scale: 0.9;
      }
      to {
        scale: 1;
      }
    }
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
