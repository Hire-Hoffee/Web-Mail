import React from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { useTranslation } from "react-i18next";
import { changeThemeState, changeSettingsOpen } from "@/store/utilsSlice";

import StyledThemeSwitcher from "./styles/StyledThemeSwitcher";
import LogoSVG from "./styles/svgs/LogoSVG";

import { changeTheme } from "@/utils/functions/utilsFunctions";

function ThemeSwitcher(): JSX.Element {
  const themeSwitcher = useAppSelector((state) => state.utils.themeSwitcher);
  const theme = useAppSelector((state) => state.utils.theme);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <StyledThemeSwitcher
      className={themeSwitcher === true ? "showSettingsSwitcher" : "hideSettingsSwitcher"}
    >
      <h4>{t("settings.themeChangeDescription")}</h4>
      <div>
        <div
          className={theme === "brown" ? "chosenTheme" : ""}
          onClick={() =>
            changeTheme({
              themeStyle: "brown",
              useDispatch: dispatch,
              changeTheme: changeThemeState,
              changeSettings: changeSettingsOpen,
            })
          }
        ></div>
        <div
          className={theme === "gray" ? "chosenTheme" : ""}
          onClick={() =>
            changeTheme({
              themeStyle: "gray",
              useDispatch: dispatch,
              changeTheme: changeThemeState,
              changeSettings: changeSettingsOpen,
            })
          }
        ></div>
        <div
          className={theme === "violet" ? "chosenTheme" : ""}
          onClick={() =>
            changeTheme({
              themeStyle: "violet",
              useDispatch: dispatch,
              changeTheme: changeThemeState,
              changeSettings: changeSettingsOpen,
            })
          }
        ></div>
        <div
          className={theme === "darkBlue" ? "chosenTheme" : ""}
          onClick={() =>
            changeTheme({
              themeStyle: "darkBlue",
              useDispatch: dispatch,
              changeTheme: changeThemeState,
              changeSettings: changeSettingsOpen,
            })
          }
        ></div>
        <div
          className={theme === "blue" ? "chosenTheme" : ""}
          onClick={() =>
            changeTheme({
              themeStyle: "blue",
              useDispatch: dispatch,
              changeTheme: changeThemeState,
              changeSettings: changeSettingsOpen,
            })
          }
        ></div>
        <div
          className={theme === "pink" ? "chosenTheme" : ""}
          onClick={() =>
            changeTheme({
              themeStyle: "pink",
              useDispatch: dispatch,
              changeTheme: changeThemeState,
              changeSettings: changeSettingsOpen,
            })
          }
        ></div>
        <div
          className={theme === "orange" ? "chosenTheme" : ""}
          onClick={() =>
            changeTheme({
              themeStyle: "orange",
              useDispatch: dispatch,
              changeTheme: changeThemeState,
              changeSettings: changeSettingsOpen,
            })
          }
        ></div>
        <div
          className={theme === "green" ? "chosenTheme" : ""}
          onClick={() =>
            changeTheme({
              themeStyle: "green",
              useDispatch: dispatch,
              changeTheme: changeThemeState,
              changeSettings: changeSettingsOpen,
            })
          }
        ></div>
        <div
          className={theme === "teal" ? "chosenTheme" : ""}
          onClick={() =>
            changeTheme({
              themeStyle: "teal",
              useDispatch: dispatch,
              changeTheme: changeThemeState,
              changeSettings: changeSettingsOpen,
            })
          }
        ></div>
        <div
          className={theme === "beige" ? "chosenTheme" : ""}
          onClick={() =>
            changeTheme({
              themeStyle: "beige",
              useDispatch: dispatch,
              changeTheme: changeThemeState,
              changeSettings: changeSettingsOpen,
            })
          }
        ></div>
        <div
          className={theme === "cream" ? "chosenTheme" : ""}
          onClick={() =>
            changeTheme({
              themeStyle: "cream",
              useDispatch: dispatch,
              changeTheme: changeThemeState,
              changeSettings: changeSettingsOpen,
            })
          }
        ></div>
        <div
          className={theme === "celery" ? "chosenTheme" : ""}
          onClick={() =>
            changeTheme({
              themeStyle: "celery",
              useDispatch: dispatch,
              changeTheme: changeThemeState,
              changeSettings: changeSettingsOpen,
            })
          }
        ></div>
        <div
          className={theme === "sea" ? "chosenTheme" : ""}
          onClick={() =>
            changeTheme({
              themeStyle: "sea",
              useDispatch: dispatch,
              changeTheme: changeThemeState,
              changeSettings: changeSettingsOpen,
            })
          }
        ></div>
        <div
          className={theme === "purple" ? "chosenTheme" : ""}
          onClick={() =>
            changeTheme({
              themeStyle: "purple",
              useDispatch: dispatch,
              changeTheme: changeThemeState,
              changeSettings: changeSettingsOpen,
            })
          }
        ></div>
        <div
          className={theme === "lightGray" ? "chosenTheme" : ""}
          onClick={() =>
            changeTheme({
              themeStyle: "lightGray",
              useDispatch: dispatch,
              changeTheme: changeThemeState,
              changeSettings: changeSettingsOpen,
            })
          }
        ></div>
      </div>
      <div>
        <div
          className={theme === "white" ? "chosenTheme" : ""}
          onClick={() =>
            changeTheme({
              themeStyle: "white",
              useDispatch: dispatch,
              changeTheme: changeThemeState,
              changeSettings: changeSettingsOpen,
            })
          }
        >
          <LogoSVG />
        </div>
        <div
          className={theme === "dark" ? "chosenTheme" : ""}
          onClick={() =>
            changeTheme({
              themeStyle: "dark",
              useDispatch: dispatch,
              changeTheme: changeThemeState,
              changeSettings: changeSettingsOpen,
            })
          }
        >
          <LogoSVG />
        </div>
        <div
          className={theme === "anime" ? "chosenTheme" : ""}
          onClick={() =>
            changeTheme({
              themeStyle: "anime",
              useDispatch: dispatch,
              changeTheme: changeThemeState,
              changeSettings: changeSettingsOpen,
            })
          }
        ></div>
      </div>
    </StyledThemeSwitcher>
  );
}

export default ThemeSwitcher;
