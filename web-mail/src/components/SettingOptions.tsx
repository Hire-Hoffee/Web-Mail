import React, { useRef } from "react";
import StyledSettingsOptions from "./styles/StyledSettingsOptions";
import { useAppSelector } from "@/store/hooks";

import LogoSVG from "./styles/svgs/LogoSVG";

function SettingOptions(): JSX.Element {
  const settingsOpen = useAppSelector((state) => state.utils.settingsOpen);
  const scrollDivRef = useRef<HTMLElement>(null);

  function eventListener(event: Event) {
    return event.preventDefault();
  }

  return (
    <StyledSettingsOptions
      ref={scrollDivRef}
      onMouseEnter={() => scrollDivRef.current?.addEventListener("wheel", eventListener)}
      onMouseLeave={() => scrollDivRef.current?.removeEventListener("wheel", eventListener)}
      className={
        settingsOpen === true ? "showSettings" : settingsOpen === false ? "hideSettings" : ""
      }
    >
      <div>
        <button>Внешний вид</button>
        <button>Язык: Русский</button>
      </div>

      <div>
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
      </div>
    </StyledSettingsOptions>
  );
}

export default SettingOptions;
