import App from "../components/App";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <App />
    </>
  );
}
