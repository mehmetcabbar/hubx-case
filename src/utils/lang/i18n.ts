import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Turkish from './tr.json';

await i18n.use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        fallbackLng: 'tr', // Yedek dil
        resources: {
            tr: Turkish
        },
        lng: 'tr', // Varsayılan dil
        interpolation: {
            escapeValue: false, // HTML kaçışı
        },
    });

export default i18n;