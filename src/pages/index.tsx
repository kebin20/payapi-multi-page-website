/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
import Head from "next/head";
import NavBar from "@/components/layout/Navbar";
import Image from "next/image";

import PhoneMockup from "../assets/home/desktop/illustration-phone-mockup.svg";
import EasyMockup from "../assets/home/desktop/illustration-easy-to-implement.svg";
import SimpleUIMockup from "../assets/home/desktop/illustration-simple-ui.svg";

import PersonalFinances from "../assets/home/desktop/icon-personal-finances.svg";
import ConsumerPayments from "../assets/home/desktop/icon-consumer-payments.svg";
import BankingCoverage from "../assets/home/desktop/icon-banking-and-coverage.svg";

import TeslaImage from "../assets/shared/desktop/tesla.svg";
import HPImage from "../assets/shared/desktop/hewlett-packard.svg";
import GoogleImage from "../assets/shared/desktop/google.svg";
import MicrosoftImage from "../assets/shared/desktop/microsoft.svg";
import OracleImage from "../assets/shared/desktop/oracle.svg";
import NvidiaImage from "../assets/shared/desktop/nvidia.svg";

import { PrimaryButton, SecondaryButton } from "@/components/UI/Buttons";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/layout/CallToAction";

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
    <div className="index-main">
      <Head>
        <title>PayAPI</title>
        <meta name="description" content="Setup your Payment system with us!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>
        <section className="mx-8 grid text-center justify-items-center lg:grid-cols-2 lg:mx-48">
          <Image
            alt="build your apis for free"
            src={PhoneMockup}
            className="w-1/2 ml-4 md:w-2/5 md:ml-14 lg:w-4/5 lg:ml-auto order-first lg:order-last"
          />
          <div className="flex flex-col gap-6 md:px-14 lg:p-0 lg:justify-center lg:gap-8">
            {" "}
            <h1 className="text-550 mx-2 tracking-tight text-blue font-bold leading-9 md:text-5xl md:mx-10 md:mb-4 lg:text-7xl lg:text-left lg:mx-0">
              Start building with our APIs for absolutely free.
            </h1>
            <div className="flex flex-col gap-4 md:relative">
              {" "}
              <input
                type="text"
                placeholder="Enter email adddress"
                className="bg-white font-bold px-14 py-3.5 rounded-3xl shadow-lg md:text-left md:px-8 md:mx-24 md:w-1/2 lg:w-4/5 lg:mx-0"
              />
              <PrimaryButton className="text-white md:absolute md:right-20 md:z-10 md:px-8 lg:right-10        ">
                Schedule a Demo
              </PrimaryButton>
            </div>
            <p className="lg:text-left lg:ml-8">
              Have any questions?{" "}
              <a className="font-bold" href="#">
                Contact Us
              </a>
            </p>
          </div>
        </section>
        <section className=" bg-dark-blue my-28 px-10 py-28 grid justify-items-center gap-8 text-center text-white bg-pattern-circle-company lg:grid-cols-2 lg:gap-0 lg:px-24 lg:my-0">
          <div className="grid grid-cols-2 gap-14 items-center md:grid-cols-3 md:justify-items-center  lg:ml-auto order-first lg:order-last lg:items-center lg:align-center lg:m-auto">
            {companyLogos.map((logo: any, index: number) => {
              return <Image key={index} src={logo.src} alt={logo.alt} />;
            })}
          </div>
          <div className="flex flex-col gap-8 lg:text-left lg:items-start lg:w-2/3">
            {" "}
            <h2 className="mt-10 text-4xl font-bold md:text-5xl lg:mt-0">
              Who we work with
            </h2>
            <p className="leading-7 text-white md:mx-32 lg:m-0">
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.
            </p>
            <SecondaryButton className="self-center lg:self-start">
              about us
            </SecondaryButton>
          </div>
        </section>
        <div className="bg-pattern-circle-feature ">
          <section className="md:mx-20">
            <div className="my-20 mx-6 flex flex-col gap-4 items-center text-center lg:flex-row lg:justify-center">
              <Image
                src={EasyMockup}
                alt="easy to implement UI"
                className="max-w-[475px] ml-9 md:max-w-md lg:max-w-screen-lg"
              />
              <div className="flex flex-col gap-6 lg:text-left lg:pr-32 lg:leading-7">
                {" "}
                <h2 className="text-blue text-4xl font-bold md:text-700 lg:text-5xl">
                  Easy to implement
                </h2>
                <p>
                  Our API comes with just a few lines of code. You’ll be up and
                  running in no time. We built our documentation page to
                  integrate payments functionality with ease.
                </p>
              </div>
            </div>

            <div className="my-20 mx-6 flex flex-col gap-4 items-center text-center lg:flex-row lg:justify-center">
              <Image
                src={SimpleUIMockup}
                alt="easy to implement UI"
                className="max-w-[435px] ml-9 md:max-w-md order-first lg:order-last lg:max-w-screen-sm"
              />
              <div className="flex flex-col gap-6 lg:text-left lg:pl-14 lg:ml-10 lg:leading-7">
                <h2 className="text-blue text-4xl font-bold md:text-700 lg:text-5xl">
                  Simple UI & UX
                </h2>
                <p>
                  Our pre-built form is easy to integrate in your app or
                  website’s checkout flow and designed to optimize conversion.
                </p>
              </div>
            </div>
          </section>

          <section className="my-20 mx-8 grid gap-12 justify-items-center text-center md:grid-cols-3 md:gap-6 lg:mx-40">
            <div className="flex flex-col items-center gap-8 md:gap-6">
              <Image
                src={PersonalFinances}
                alt={"sort your personal finances easily"}
              />
              <h3 className="text-lg text-blue font-bold font-sans">
                Personal Finances
              </h3>
              <p>
                Consolidate financial data from multiple sources and categorize
                transactions up to 2 years of history. Analyze reports to
                reconcile activities in your account.
              </p>
            </div>
            <div className="flex flex-col items-center gap-8 md:gap-6">
              <Image
                src={BankingCoverage}
                alt={"explore our banking services"}
              />
              <h3 className="text-lg text-blue font-bold font-sans">
                Banking & Coverage
              </h3>
              <p>
                With our platform, you can speed up account onboarding and
                support ongoing payments for checking, savings, credit card, and
                brokerage accounts.
              </p>
            </div>
            <div className="flex flex-col items-center gap-8 md:gap-6">
              <Image src={ConsumerPayments} alt={"set up secure payments"} />
              <h3 className="text-lg text-blue font-bold font-sans">
                Consumer Payments
              </h3>
              <p>
                It’s easier to set up secure bank payments with us through a
                flow designed with the user experience in mind. Customers could
                instantly authenticate their account.
              </p>
            </div>
          </section>
        </div>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
