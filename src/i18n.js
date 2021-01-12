import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationES from "./locales/es/translation.json";

// Attempt to grab the language from browser settings
let browserLanguage;
if (navigator.language.includes("en")) {
  browserLanguage = "en";
} else if (navigator.language.includes("es")) {
  browserLanguage = "es";
}

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    resources,
    lng: browserLanguage,
    fallbackLng: "en",
    debug: true,
  });

export default i18n;
