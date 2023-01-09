import React from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { changeThemeState } from "@/store/utilsSlice";

import StyledThemeSwitcher from "./styles/StyledThemeSwitcher";
import LogoSVG from "./styles/svgs/LogoSVG";

function ThemeSwitcher(): JSX.Element {
  const themeSwitcher = useAppSelector((state) => state.utils.themeSwitcher);
  const theme = useAppSelector((state) => state.utils.theme);
  const dispatch = useAppDispatch();

  function changeTheme(themeStyle: string) {
    localStorage.setItem("theme", themeStyle);
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
        >
          1
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div onClick={() => changeTheme("white")}>
          <LogoSVG />
        </div>
        <div onClick={() => changeTheme("dark")}>
          <LogoSVG />
        </div>
        <div></div>
      </div>
    </StyledThemeSwitcher>
  );
}

export default ThemeSwitcher;
