import React from "react";
import { Outlet } from "react-router-dom";
import GlobalStyles from "./components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { whiteTheme, darkTheme } from "./components/styles/themes";

import StyledContainer from "./components/styles/StyledContainer";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Header />
      <StyledContainer>
        <Navbar />
        <Outlet />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
