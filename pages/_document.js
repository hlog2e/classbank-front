import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link href="/favicon.ico" rel="icon" />

        <link rel="apple-touch-icon" href="/app-icon/icon-152x152.png"></link>
        <meta name="theme-color" content="#f5f5f5" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
