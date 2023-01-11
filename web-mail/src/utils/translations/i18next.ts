import i18next, { i18n } from "i18next";
import { initReactI18next } from "react-i18next";
import languages from "./languages";

i18next.use(initReactI18next).init<i18n>({
  resources: languages,
  lng: "ru",
  interpolation: {
    escapeValue: false,
  },
  debug: true,
  supportedLngs: ["en", "ru"],
  fallbackLng: "ru",
});

export default i18next;
