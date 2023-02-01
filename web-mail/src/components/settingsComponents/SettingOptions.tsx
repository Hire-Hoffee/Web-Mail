import React, { useRef } from "react";
import StyledSettingsOptions from "../styles/styledSettings/StyledSettingsOptions";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { useTranslation } from "react-i18next";
import { themeSwitchOpened, langSwitchOpened } from "@/store/utilsSlice";

import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";

import russianLang from "@/assets/images/russian.svg";
import englishLang from "@/assets/images/english.svg";

import { eventListener } from "@/utils/functions/utilsFunctions";

function SettingOptions(): JSX.Element {
  const settingsOpen = useAppSelector((state) => state.utils.settingsOpen);
  const themeSwitcher = useAppSelector((state) => state.utils.themeSwitcher);
  const langSwitcher = useAppSelector((state) => state.utils.langSwitcher);
  const dispatch = useAppDispatch();
  const scrollDivRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

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
          {t("settings.themeAppearance")}
        </button>
        <button
          onClick={() => dispatch(langSwitchOpened(true))}
          className={langSwitcher ? "activeBtn" : ""}
        >
          {localStorage.getItem("lang") === "en" ? (
            <span>
              {t("settings.changeLangBtnMenu")}: English
              <img src={englishLang} alt="lang_icon" />
            </span>
          ) : (
            <span>
              {t("settings.changeLangBtnMenu")}: Русский
              <img src={russianLang} alt="lang_icon" />
            </span>
          )}
        </button>
      </div>
      {themeSwitcher ? <ThemeSwitcher /> : langSwitcher ? <LanguageSwitcher /> : false}
    </StyledSettingsOptions>
  );
}

export default SettingOptions;
