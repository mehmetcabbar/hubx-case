import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import English from './en.json';

interface TranslationResources {
  [key: string]: string;
}

interface EnglishResources {
  translation: TranslationResources;
}

const resources: {
  en: {
    translation: TranslationResources;
  };
} = {
  en: English as EnglishResources,
};

await i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'en', // Backup Language
  resources,
  lng: 'en', // Default Language
  interpolation: {
    escapeValue: false, // Escape HTML
  },
});

export default i18n;
