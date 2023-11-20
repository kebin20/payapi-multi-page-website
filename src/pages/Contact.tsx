import Image from "next/image";

import NavBar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/layout/CallToAction";
import ContactForm from "@/components/layout/ContactForm";

import TeslaImage from "../assets/shared/desktop/tesla-dark.svg";
import HPImage from "../assets/shared/desktop/hewlett-dark.svg";
import GoogleImage from "../assets/shared/desktop/google-dark.svg";
import MicrosoftImage from "../assets/shared/desktop/microsoft-dark.svg";
import OracleImage from "../assets/shared/desktop/oracle-dark.svg";
import NvidiaImage from "../assets/shared/desktop/nvidia-dark.svg";
import { FormDataProps } from "@/models";

function Contact() {
  const companyLogos: any = [
    { src: TeslaImage, alt: "Tesla Logo" },
    { src: MicrosoftImage, alt: "Microsoft logo" },
    { src: HPImage, alt: "Hewlett Packard logo" },
    { src: OracleImage, alt: "Oracle logo" },
    { src: GoogleImage, alt: "Google logo" },
    { src: NvidiaImage, alt: "Nvidia logo" },
  ];

  async function addContactHandler(contactDetails: FormDataProps) {
    try {
      console.log("Contact Details:", contactDetails);

      const response = await fetch("/api/new-contact", {
        method: "POST",
        body: JSON.stringify(contactDetails),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }
    } catch (error) {
      alert("Error submitting contact form");
    }
  }

  return (
    <div className="contact-main">
      <NavBar />
      <main>
        <h1 className="text-4xl text-center text-blue font-bold leading-9 mx-6 md:text-5xl md:mx-44 md:mt-10 lg:text-left lg:w-2/5">
          Submit a help request and we’ll get in touch shortly.
        </h1>
        <div className="lg:flex">
          {" "}
          <ContactForm addContactHandler={addContactHandler} />
          <section className="grid justify-items-center gap-8 text-center px-10 py-14 md:pt-0 md:mb-10 lg:place-content-center">
            <h2 className="text-blue text-2xl font-bold md:mx-40 lg:mx-0 lg:text-left lg:mr-48">
              Join the thousands of innovators already building with us
            </h2>
            <div className="grid grid-cols-2 gap-14 md:grid-cols-3 lg:gap-10 lg:justify-items-center lg:mr-auto">
              {companyLogos.map((logo: any, index: number) => {
                return <Image key={index} src={logo.src} alt={logo.alt} />;
              })}
            </div>
          </section>
        </div>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
