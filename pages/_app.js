import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

import AOS from "aos";

import "aos/dist/aos.css";
import "../scss/global.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ChakraProvider>
      <AnimateSharedLayout>
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </AnimateSharedLayout>
    </ChakraProvider>
  );
}

export default MyApp;
