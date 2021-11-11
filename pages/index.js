import App from "../components/App";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <title>Weather App | SN</title>
      </Head>
      <App />
    </>
  );
}
