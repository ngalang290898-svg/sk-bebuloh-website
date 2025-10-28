// src/pages/_app.js
import "../styles/globals.css";
import Head from "next/head";
import { LanguageProvider } from "../context/LanguageContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Head>
        <title>SK Bebuloh</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </LanguageProvider>
  );
}
