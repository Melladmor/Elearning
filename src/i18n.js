import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const fallbackLng = ["en"];
const availableLanguages = ["en", "ar", "de", "tr"];
const savedLanguage = localStorage.getItem("i18nextLng");

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: savedLanguage || "en",
    // resources,
    backend: {
      /* translation file path */
      loadPath: "/i18n/{{ns}}/{{lng}}.json",
    },
    fallbackLng,
    detection: {
      checkWhitelist: true,
      order: ["localStorage", "htmlTag", "cookie"],
      caches: ["localStorage", "cookie"],
    },
    debug: false,
    whitelist: availableLanguages,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
    },
  });

export default i18n;
