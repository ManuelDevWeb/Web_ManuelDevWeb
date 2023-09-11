import { useRouter } from "next/router";

// Components
import Layout from "../components/Layout";
import Transition from "../components/Transition";

// Motion
import { AnimatePresence, motion } from "framer-motion";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
