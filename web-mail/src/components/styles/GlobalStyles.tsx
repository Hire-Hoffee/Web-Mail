import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { ThemeType } from "./themes";

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  ${reset}

  html {
    font-family: Arial, Helvetica, sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.body};
  }
`;

export default GlobalStyles;
