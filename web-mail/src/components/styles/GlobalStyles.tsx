import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import ThemeType from "@/types/themeType";

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  ${reset}

  html {
    font-family: Arial, Helvetica, sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.body};
    color:  ${({ theme }) => theme.colors.text.primary};
  }
  a {
    text-decoration: none;
    color: unset;
  }
`;

export default GlobalStyles;
