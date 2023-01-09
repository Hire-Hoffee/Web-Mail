import React, { useRef } from "react";
import StyledSettingsOptions from "./styles/StyledSettingsOptions";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { themeSwitchOpened, langSwitchOpened } from "@/store/utilsSlice";

import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";

import russianLang from "@/assets/images/russian.svg";
import englishLang from "@/assets/images/english.svg";

function SettingOptions(): JSX.Element {
  const settingsOpen = useAppSelector((state) => state.utils.settingsOpen);
  const themeSwitcher = useAppSelector((state) => state.utils.themeSwitcher);
  const langSwitcher = useAppSelector((state) => state.utils.langSwitcher);
  const dispatch = useAppDispatch();
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
        <button
          onClick={() => dispatch(themeSwitchOpened(true))}
          className={themeSwitcher ? "activeBtn" : ""}
        >
          Внешний вид
        </button>
        <button
          onClick={() => dispatch(langSwitchOpened(true))}
          className={langSwitcher ? "activeBtn" : ""}
        >
          Язык: Русский
          <img src={russianLang} alt="lang_icon" />
        </button>
      </div>
      {themeSwitcher ? <ThemeSwitcher /> : langSwitcher ? <LanguageSwitcher /> : false}
    </StyledSettingsOptions>
  );
}

export default SettingOptions;
