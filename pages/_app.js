import GlobalStyles from "../components/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main>
        <GlobalStyles />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
