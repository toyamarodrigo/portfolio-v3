import { ChakraProvider } from '@chakra-ui/react';
import '../scss/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
