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
        <form className="flex flex-col" action="">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email Address:</label>
          <input type="text" id="email" name="email" />

          <label htmlFor="company">Company Name:</label>
          <input type="text" id="company" name="company" />

          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>

          <div>
            <label className="flex" htmlFor="subscribe">
              Stay up-to-date with company announcements and updates to our API
            </label>
            <input type="checkbox" id="subscribe" name="subscribe" />
          </div>

          <button type="submit">Submit</button>
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
