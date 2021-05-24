import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import '../scss/global.scss';

function MyApp({ Component, pageProps }) {
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
