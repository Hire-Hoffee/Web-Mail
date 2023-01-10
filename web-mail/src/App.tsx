import React, { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@/components/styles/GlobalStyles";
import StyledContainer from "@/components/styles/StyledContainer";
import { whiteTheme } from "@/themes/themes";
import themesDictionary from "./themes/themesDictionary";

import SettingsButton from "./components/SettingsButton";
import SettingOptions from "./components/SettingOptions";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { changeThemeState, changeFilterToggle, changeSettingsOpen } from "@/store/utilsSlice";

function App(): JSX.Element {
  const theme = useAppSelector((state) => state.utils.theme);
  const { folder } = useParams();
  const settingsOpen = useAppSelector((state) => state.utils.settingsOpen);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      dispatch(changeThemeState(localStorage.getItem("theme") || "white"));
    }
    if (window.location.pathname === "/") {
      navigate("/inbox?letters=all");
    }
    return;
  }, [folder]);

  return (
    <ThemeProvider
      theme={
        theme && theme in themesDictionary
          ? themesDictionary[theme as keyof typeof themesDictionary]
          : whiteTheme
      }
    >
      <GlobalStyles />
      <section
        onClick={() => dispatch(changeSettingsOpen(false))}
        className={settingsOpen === true ? "scaleDown" : settingsOpen === false ? "scaleUp" : ""}
      >
        <Header />
        <StyledContainer onClick={() => dispatch(changeFilterToggle(false))}>
          <Navbar />
          <Outlet />
        </StyledContainer>
      </section>
      <SettingsButton />
      <SettingOptions />
    </ThemeProvider>
  );
}

export default App;
