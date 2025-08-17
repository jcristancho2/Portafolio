import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to my portfolio",
      },
    },
    es: {
      translation: {
        welcome: "Bienvenido a mi portafolio",
      },
    },
  },
  lng: "es", // idioma inicial
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
