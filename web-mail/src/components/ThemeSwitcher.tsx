import React from "react";
import StyledThemeSwitcher from "./styles/StyledThemeSwitcher";
import LogoSVG from "./styles/svgs/LogoSVG";
import { useAppSelector, useAppDispatch } from "@/store/hooks";

function ThemeSwitcher(): JSX.Element {
  const themeSwitcher = useAppSelector((state) => state.utils.themeSwitcher);

  return (
    <StyledThemeSwitcher
      className={themeSwitcher === true ? "showSettingsSwitcher" : "hideSettingsSwitcher"}
    >
      <h4>Настройки внешнего вида вашей почты и темы оформления</h4>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div>
          <LogoSVG />
        </div>
        <div>
          <LogoSVG />
        </div>
        <div></div>
      </div>
    </StyledThemeSwitcher>
  );
}

export default ThemeSwitcher;
