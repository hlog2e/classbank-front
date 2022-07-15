import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
