import Head from "next/head";
import NavBar from "@/components/layout/Navbar";
import Image from "next/image";

import PhoneMockup from "../assets/home/desktop/illustration-phone-mockup.svg";
import easyMockup from "../assets/home/desktop/illustration-easy-to-implement.svg";
import SimpleUIMockup from "../assets/home/desktop/illustration-simple-ui.svg";

import TeslaImage from "../assets/shared/desktop/tesla.svg";
import HPImage from "../assets/shared/desktop/hewlett-packard.svg";
import GoogleImage from "../assets/shared/desktop/google.svg";
import MicrosoftImage from "../assets/shared/desktop/microsoft.svg";
import OracleImage from "../assets/shared/desktop/oracle.svg";
import NvidiaImage from "../assets/shared/desktop/nvidia.svg";

import { PrimaryButton, SecondaryButton } from "@/components/UI/Buttons";

export default function Home() {
  const companyLogos: any = [
    { src: TeslaImage, alt: "Tesla Logo" },
    { src: MicrosoftImage, alt: "Microsoft logo" },
    { src: HPImage, alt: "Hewlett Packard logo" },
    { src: OracleImage, alt: "Oracle logo" },
    { src: GoogleImage, alt: "Google logo" },
    { src: NvidiaImage, alt: "Nvidia logo" },
  ];

  return (
    <>
      <Head>
        <title>PayAPI</title>
        <meta name="description" content="Setup your Payment system with us!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="container mx-auto">
        <section className="mx-6 grid gap-8 text-center">
          <Image
            alt="build your apis for free"
            src={PhoneMockup}
            className="w-1/2 m-auto"
          />
          <h1 className="text-3xl font-bold leading-9 mx-4">
            Start building with our APIs for absolutely free.
          </h1>
          <input
            type="text"
            placeholder="Enter email adddress"
            className="bg-white font-bold px-14 py-3.5 rounded-3xl shadow-lg"
          />
          <PrimaryButton>Schedule a Demo</PrimaryButton>
          <p>
            Have any questions?{" "}
            <a className="font-bold" href="#">
              Contact Us
            </a>
          </p>
        </section>
        <section className="bg-dark-blue my-20 grid justify-items-center gap-8 text-center text-white px-10 py-28 bg-pattern-circle-company ">
          <div className="grid grid-cols-2 gap-14">
            {companyLogos.map((logo: any, index: number) => {
              return <Image key={index} src={logo.src} alt={logo.alt} />;
            })}
          </div>
          <h2 className="mt-10 text-4xl font-bold">Who we work with</h2>
          <p className="leading-7">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <SecondaryButton>about us</SecondaryButton>
        </section>
        <section className="my-20 grid gap-4 justify-items-center text-center">
          <Image src={easyMockup} alt="easy to implement UI" />
          <h2 className="text-blue text-4xl font-bold">Easy to implement</h2>
          <p className="mx-6">
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </section>
        <section className="my-20 grid gap-4 justify-items-center text-center">
          <Image src={SimpleUIMockup} alt="easy to implement UI" />
          <h2 className="text-blue text-4xl font-bold">Simple UI & UX</h2>
          <p className="mx-6">
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </section>
      </main>
    </>
  );
}
