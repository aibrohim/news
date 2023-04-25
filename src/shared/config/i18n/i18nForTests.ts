import i18nForTests from "i18next";
import { initReactI18next } from "react-i18next";

i18nForTests.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  resources: { en: { translations: {} } },
});

export { i18nForTests };
