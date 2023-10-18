import NavBar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/layout/CallToAction";
import Image from "next/image";

import TeslaImage from "../assets/shared/desktop/tesla-dark.svg";
import HPImage from "../assets/shared/desktop/hewlett-dark.svg";
import GoogleImage from "../assets/shared/desktop/google-dark.svg";
import MicrosoftImage from "../assets/shared/desktop/microsoft-dark.svg";
import OracleImage from "../assets/shared/desktop/oracle-dark.svg";
import NvidiaImage from "../assets/shared/desktop/nvidia-dark.svg";
import { SecondaryButton } from "@/components/UI/Buttons";

function Contact() {
  const companyLogos: any = [
    { src: TeslaImage, alt: "Tesla Logo" },
    { src: MicrosoftImage, alt: "Microsoft logo" },
    { src: HPImage, alt: "Hewlett Packard logo" },
    { src: OracleImage, alt: "Oracle logo" },
    { src: GoogleImage, alt: "Google logo" },
    { src: NvidiaImage, alt: "Nvidia logo" },
  ];

  return (
    <div className="contact-main">
      <NavBar />
      <main>
        <h1 className="text-4xl text-center text-blue font-bold leading-9 mx-6">
          Submit a help request and we’ll get in touch shortly.
        </h1>
        <form className="flex flex-col gap-4 text-blue mx-6 my-14" action="">
          <div className="flex justify-between border-b-2 border-blue border-opacity-30 p-5">
            {" "}
            <label htmlFor="name" className="opacity-50">
              Name
            </label>
            <input
              className="bg-transparent"
              type="text"
              id="name"
              name="name"
            />
          </div>

          <div className="flex justify-between  border-b-2 border-blue border-opacity-30 p-5">
            {" "}
            <label htmlFor="" className="opacity-50">
              Email Address
            </label>
            <input
              className="bg-transparent"
              type="text"
              id="email address"
              name="email address"
            />
          </div>

          <div className="flex justify-between  border-b-2 border-blue border-opacity-30 p-5">
            {" "}
            <label htmlFor="" className="opacity-50">
              Company Name
            </label>
            <input
              className="bg-transparent w-7/12"
              type="text"
              id="company name"
              name="company name"
            />
          </div>

          <div className="flex justify-between  border-b-2 border-blue border-opacity-30 p-5">
            {" "}
            <label htmlFor="" className="opacity-50">
              Title
            </label>
            <input
              className="bg-transparent"
              type="text"
              id="title"
              name="title"
            />
          </div>

          <div className="flex justify-between border-b-2 border-blue border-opacity-30 p-5">
            {" "}
            <label htmlFor="" className="opacity-50">
              Message
            </label>
            <textarea className="bg-transparent" id="message" name="message" />
          </div>

          <div className="flex gap-6 opacity-100 my-4">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              className="bg-transparent"
            />
            <label className="flex" htmlFor="subscribe">
              Stay up-to-date with company announcements and updates to our API
            </label>
          </div>

          <SecondaryButton
            className="border-blue text-blue opacity-100 self-start"
            type="submit"
          >
            Submit
          </SecondaryButton>
        </form>
        <section className="grid justify-items-center gap-8 text-center px-10 py-14">
          <h2 className="text-blue text-2xl font-bold">
            Join the thousands of innovators already building with us
          </h2>
          <div className="grid grid-cols-2 gap-14">
            {companyLogos.map((logo: any, index: number) => {
              return <Image key={index} src={logo.src} alt={logo.alt} />;
            })}
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
