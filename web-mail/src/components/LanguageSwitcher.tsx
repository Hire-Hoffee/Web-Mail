import React from "react";
import StyledLanguageSwitcher from "./styles/StyledLanguageSwitcher";
import { useAppSelector, useAppDispatch } from "@/store/hooks";

import russianLang from "@/assets/images/russian.svg";
import englishLang from "@/assets/images/english.svg";

function LanguageSwitcher() {
  const langSwitcher = useAppSelector((state) => state.utils.langSwitcher);

  return (
    <StyledLanguageSwitcher
      className={langSwitcher === true ? "showSettingsSwitcher" : "hideSettingsSwitcher"}
    >
      <h4>Изменить язык</h4>

      <div>
        <label>
          <input type="radio" name="language" defaultChecked />
          <span>
            <img src={russianLang} alt="lang_icon" />
            Русский
          </span>
        </label>
        <label>
          <input type="radio" name="language" />
          <span>
            <img src={englishLang} alt="lang_icon" />
            English
          </span>
        </label>
      </div>

      <button>Выбрать язык</button>
    </StyledLanguageSwitcher>
  );
}

export default LanguageSwitcher;
