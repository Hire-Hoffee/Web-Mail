import React from "react";
import { Outlet } from "react-router-dom";
import GlobalStyles from "./components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { whiteTheme, darkTheme } from "./components/styles/themes";

import Header from "./components/Header";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={whiteTheme}>
      <GlobalStyles />
      <div>
        <Header />
        <h1>App</h1>
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
