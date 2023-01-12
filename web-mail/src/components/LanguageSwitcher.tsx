import React, { useState } from "react";
import StyledLanguageSwitcher from "./styles/StyledLanguageSwitcher";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { useTranslation } from "react-i18next";
import { changeSettingsOpen, changeSiteLang } from "@/store/utilsSlice";

import russianLang from "@/assets/images/russian.svg";
import englishLang from "@/assets/images/english.svg";

import { changeLang } from "@/utils/functions/utilsFunctions";

function LanguageSwitcher() {
  const langSwitcher = useAppSelector((state) => state.utils.langSwitcher);
  const langState = useAppSelector((state) => state.utils.lang);
  const [lang, setLang] = useState("ru");
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();

  const [checkedRU, setCheckedRU] = useState(langState === "ru" ? true : false);
  const [checkedEN, setCheckedEN] = useState(langState === "en" ? true : false);

  return (
    <StyledLanguageSwitcher
      className={langSwitcher === true ? "showSettingsSwitcher" : "hideSettingsSwitcher"}
    >
      <h4>{t("settings.changeLang")}</h4>

      <div>
        <label>
          <input
            type="radio"
            name="language"
            checked={checkedRU}
            onChange={() => {
              setLang("ru");
              setCheckedRU(true);
              setCheckedEN(false);
            }}
          />
          <span>
            <img src={russianLang} alt="lang_icon" />
            Русский
          </span>
        </label>
        <label>
          <input
            type="radio"
            name="language"
            checked={checkedEN}
            onChange={() => {
              setLang("en");
              setCheckedEN(true);
              setCheckedRU(false);
            }}
          />
          <span>
            <img src={englishLang} alt="lang_icon" />
            English
          </span>
        </label>
      </div>

      <button
        onClick={() => {
          changeLang({
            lang,
            useDispatch: dispatch,
            changeSettings: changeSettingsOpen,
            changeLang: i18n.changeLanguage,
            changeSiteLang,
          });
        }}
      >
        {t("settings.changeLangBtn")}
      </button>
    </StyledLanguageSwitcher>
  );
}

export default LanguageSwitcher;
