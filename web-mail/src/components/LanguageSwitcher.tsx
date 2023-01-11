import React, { useState } from "react";
import StyledLanguageSwitcher from "./styles/StyledLanguageSwitcher";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { useTranslation } from "react-i18next";
import { changeSettingsOpen } from "@/store/utilsSlice";

import russianLang from "@/assets/images/russian.svg";
import englishLang from "@/assets/images/english.svg";

import { changeLang } from "@/utils/functions/utilsFunctions";

function LanguageSwitcher() {
  const langSwitcher = useAppSelector((state) => state.utils.langSwitcher);
  const [lang, setLang] = useState("ru");
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <StyledLanguageSwitcher
      className={langSwitcher === true ? "showSettingsSwitcher" : "hideSettingsSwitcher"}
    >
      <h4>Изменить язык</h4>

      <div>
        <label>
          <input
            type="radio"
            name="language"
            defaultChecked
            onChange={() => {
              setLang("ru");
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
            onChange={() => {
              setLang("en");
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
          });
        }}
      >
        Выбрать язык
      </button>
    </StyledLanguageSwitcher>
  );
}

export default LanguageSwitcher;
