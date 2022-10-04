import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import tEn from '../pages/locales/en/transaltion.json';
import tDe from '../pages/locales/de/transaltion.json';

i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation:tEn 
      },
      de: {
        translation: tDe
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;