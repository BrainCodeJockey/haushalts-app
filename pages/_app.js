import GlobalStyles from "../components/GlobalStyles";

import { Abel } from "@next/font/google";

const abel = Abel({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={abel.className}>
        <GlobalStyles />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
