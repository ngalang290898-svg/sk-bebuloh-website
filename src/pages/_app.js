// src/pages/_app.js
import "../styles/globals.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SK Bebuloh</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Official site - SK Bebuloh" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
