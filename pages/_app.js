import { Roboto, Oswald } from "next/font/google";
import Layout from "../components/Layout";
import "../styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
  variable: "--font-roboto",
});

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${roboto.variable} ${oswald.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
