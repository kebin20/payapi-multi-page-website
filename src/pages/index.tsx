import Head from "next/head";
import NavBar from "@/components/layout/Navbar";
import Image from "next/image";

import PhoneMockup from "../assets/home/desktop/illustration-phone-mockup.svg";

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
      <main>
        <div className="relative">
          <Image
            alt="build your apis for free"
            src={PhoneMockup}
            className="left-1/2 -translate-x-1/2 -translate-y-[5%] w-1/2"
          />

          <h1>Start building with our APIs for absolutely free.</h1>


        </div>
      </main>
    </>
  );
}
