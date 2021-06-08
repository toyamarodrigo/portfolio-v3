import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            property="og:title"
            content="Rodrigo Toyama - Fullstack Developer"
          />
          <meta
            property="og:description"
            content="Hi, I'm Rodrigo, a Fullstack Developer based in Argentina."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://toyamarodrigo.com/" />
          <meta property="og:image" content="https://i.imgur.com/k5RZyrk.png" />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
