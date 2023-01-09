import React from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { changeThemeState, changeSettingsOpen } from "@/store/utilsSlice";

import StyledThemeSwitcher from "./styles/StyledThemeSwitcher";
import LogoSVG from "./styles/svgs/LogoSVG";

function ThemeSwitcher(): JSX.Element {
  const themeSwitcher = useAppSelector((state) => state.utils.themeSwitcher);
  const theme = useAppSelector((state) => state.utils.theme);
  const dispatch = useAppDispatch();

  function changeTheme(themeStyle: string) {
    localStorage.setItem("theme", themeStyle);
    dispatch(changeSettingsOpen(false));
    dispatch(changeThemeState(themeStyle));
    return;
  }

  return (
    <StyledThemeSwitcher
      className={themeSwitcher === true ? "showSettingsSwitcher" : "hideSettingsSwitcher"}
    >
      <h4>Настройки внешнего вида вашей почты и темы оформления</h4>
      <div>
        <div
          className={theme === "brown" ? "chosenTheme" : ""}
          onClick={() => changeTheme("brown")}
        ></div>
        <div
          className={theme === "gray" ? "chosenTheme" : ""}
          onClick={() => changeTheme("gray")}
        ></div>
        <div
          className={theme === "violet" ? "chosenTheme" : ""}
          onClick={() => changeTheme("violet")}
        ></div>
        <div
          className={theme === "darkBlue" ? "chosenTheme" : ""}
          onClick={() => changeTheme("darkBlue")}
        ></div>
        <div
          className={theme === "blue" ? "chosenTheme" : ""}
          onClick={() => changeTheme("blue")}
        ></div>
        <div
          className={theme === "pink" ? "chosenTheme" : ""}
          onClick={() => changeTheme("pink")}
        ></div>
        <div
          className={theme === "orange" ? "chosenTheme" : ""}
          onClick={() => changeTheme("orange")}
        ></div>
        <div
          className={theme === "green" ? "chosenTheme" : ""}
          onClick={() => changeTheme("green")}
        ></div>
        <div
          className={theme === "teal" ? "chosenTheme" : ""}
          onClick={() => changeTheme("teal")}
        ></div>
        <div
          className={theme === "beige" ? "chosenTheme" : ""}
          onClick={() => changeTheme("beige")}
        ></div>
        <div
          className={theme === "cream" ? "chosenTheme" : ""}
          onClick={() => changeTheme("cream")}
        ></div>
        <div
          className={theme === "celery" ? "chosenTheme" : ""}
          onClick={() => changeTheme("celery")}
        ></div>
        <div
          className={theme === "sea" ? "chosenTheme" : ""}
          onClick={() => changeTheme("sea")}
        ></div>
        <div
          className={theme === "purple" ? "chosenTheme" : ""}
          onClick={() => changeTheme("purple")}
        ></div>
        <div
          className={theme === "lightGray" ? "chosenTheme" : ""}
          onClick={() => changeTheme("lightGray")}
        ></div>
      </div>
      <div>
        <div
          className={theme === "white" ? "chosenTheme" : ""}
          onClick={() => changeTheme("white")}
        >
          <LogoSVG />
        </div>
        <div className={theme === "dark" ? "chosenTheme" : ""} onClick={() => changeTheme("dark")}>
          <LogoSVG />
        </div>
        <div
          className={theme === "anime" ? "chosenTheme" : ""}
          onClick={() => changeTheme("anime")}
        ></div>
      </div>
    </StyledThemeSwitcher>
  );
}

export default ThemeSwitcher;
