import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../components/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            property="og:title"
            content="Rodrigo Toyama - Frontend Developer"
          />
          <meta
            property="og:description"
            content="Hi, I'm Rodrigo, a Frontend Developer based in Argentina."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rodrito.dev/" />
          <meta property="og:image" content="https://i.imgur.com/k5RZyrk.png" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
