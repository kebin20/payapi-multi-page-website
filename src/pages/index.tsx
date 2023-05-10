import Head from "next/head";
import NavBar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>PayAPI</title>
        <meta name="description" content="Setup your Payment system with us!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main></main>
    </>
  );
}
