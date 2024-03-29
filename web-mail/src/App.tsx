import React, { useEffect, Suspense } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@/components/styles/GlobalStyles";
import StyledContainer from "@/components/styles/styledContainers/StyledContainer";
import { whiteTheme } from "@/utils/themes/themes";
import themesDictionary from "./utils/themes/themesDictionary";

import SettingsButton from "./components/settingsComponents/SettingsButton";
import SettingOptions from "./components/settingsComponents/SettingOptions";
import Header from "@/components/headerComponents/Header";
import Navbar from "@/components/navbarComponents/Navbar";
import CreateEmail from "./components/emailsComponents/CreateEmail";

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
    <Suspense>
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
        <CreateEmail />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
