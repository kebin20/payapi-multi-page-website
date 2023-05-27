import Head from "next/head";
import NavBar from "@/components/layout/Navbar";
import Image from "next/image";

import PhoneMockup from "../assets/home/desktop/illustration-phone-mockup.svg";
import { PrimaryButton } from "@/components/UI/Buttons";

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
        <section className="mx-6 absolute grid gap-8 text-center">
          <Image
            alt="build your apis for free"
            src={PhoneMockup}
            className="w-1/2 m-auto"
          />
          <h1 className="text-3xl font-bold mx-5">
            Start building with our APIs for absolutely free.
          </h1>
          <input
            type="text"
            placeholder="Enter email adddress"
            className="bg-white font-bold px-14 py-3.5 rounded-3xl shadow-lg"
          />
          <PrimaryButton>Schedule a demo</PrimaryButton>
          <p>
            Have any questions?{" "}
            <a className="font-bold" href="#">
              Contact us
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
