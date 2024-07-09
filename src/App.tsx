import styles from './App.module.css';
import { useTranslation } from 'react-i18next';

export function App() {
  const { t } = useTranslation()
  return (
    <>
      <header>
        <h1 className="text-3xl underline font-sf-pro font-bold">{t("intro_text")}</h1>
      </header>
      <main className={styles.main}></main>
    </>
  );
}
