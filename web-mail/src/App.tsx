import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import GlobalStyles from "./components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { whiteTheme, darkTheme } from "./components/styles/themes";

import StyledContainer from "./components/styles/StyledContainer";
import ThemeSVG from "./components/ThemeSwitcher";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import { useAppSelector, useAppDispatch } from "./store/hooks";
import { changeThemeState } from "./store/utilsSlice";

function App(): JSX.Element {
  const theme = useAppSelector((state) => state.utils.theme);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      dispatch(changeThemeState(localStorage.getItem("theme") || "white"));
    }
    if (window.location.pathname === "/") {
      return navigate("/inbox");
    }
  }, []);

  return (
    <ThemeProvider theme={theme === "white" ? whiteTheme : darkTheme}>
      <GlobalStyles />
      <Header />
      <StyledContainer>
        <Navbar />
        <Outlet />
        <ThemeSVG />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
