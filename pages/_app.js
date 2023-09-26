import { useRouter } from "next/router";

// Components
import Layout from "../components/Layout";
import Transition from "../components/Transition";

// Motion
import { AnimatePresence, motion } from "framer-motion";

// Translations
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import enTranslation from "../translations/en/global.json";
import esTranslation from "../translations/es/global.json";

// i18n configuration
i18next.init({
  interpolation: { escapeValue: false },
  // Default language
  lng: "en",
  //
  resources: {
    en: {
      global: enTranslation,
    },
    es: {
      global: esTranslation,
    },
  },
});

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <I18nextProvider i18n={i18next}>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </I18nextProvider>
  );
}

export default MyApp;
