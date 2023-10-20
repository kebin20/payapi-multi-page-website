/* eslint-disable react/no-unescaped-entities */
import NavBar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/layout/CallToAction";
import Image from "next/image";
import TeamMembersImage from "@/assets/about/mobile/image-team-members.jpg";
import TeamMembersDesktopImage from "@/assets/about/desktop/image-team-members.jpg";

function About() {
  return (
    <div className="about-main">
      <NavBar />
      <main>
        <h1 className="text-4xl text-center text-blue font-bold leading-9 mx-6 md:text-5xl md:mx-20 md:mt-8 md:tracking-tight">
          We empower innovators by delivering access to the financial system
        </h1>
        {/* <section className="grid grid-cols-1 text-center justify-center gap-8 mt-16 mx-8 mb-20 md:grid-cols-2 md:text-left"> */}
        <section className="flex flex-col gap-8 text-center mt-16 mx-8 mb-20 md:text-left">
          <div className="flex flex-col md:flex-row md:gap-12">
            {" "}
            <h2 className="text-blue text-2xl font-bold md:text-3xl md:w-full">
              Our Vision
            </h2>
            <p>
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.{" "}
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:gap-2">
            <h2 className="text-blue text-2xl font-bold md:text-3xl md:w-full">
              Our Business
            </h2>
            <p>
              At the core of our platform is the technical infrastructure APIs
              that connect consumers. Our innovative product provides key
              insights for businesses and individuals, as well as robust
              reporting for traditional financial institutions and developers.
            </p>
          </div>
        </section>
        <section>
          <Image
            alt="team members"
            src={TeamMembersImage}
            className="md:hidden"
          />
          <Image
            alt="team members"
            src={TeamMembersDesktopImage}
            className="hidden md:block"
          />
          <ul className="flex flex-col justify-center text-center gap-4 border-y-2 border-gray p-6 my-10 mx-10 md:flex-row md:text-left md:border-y-0 md:gap-4 md:mx-6 md:p-0">
            <li className="md:border-y-2 md:pt-4 md:pr-10 md:w-full md:self-end">
              <h3 className="text-blue font-sans opacity-70">Team Members</h3>
              <p className="text-dark-pink font-serif text-750 font-bold opacity-100">
                300+
              </p>
            </li>
            <li className="md:border-y-2 md:pt-4 md:pr-10 md:w-full md:self-end">
              <h3 className="text-blue font-sans opacity-70">
                Offices in the US
              </h3>
              <p className="text-dark-pink font-serif text-750 font-bold opacity-100">
                3
              </p>
            </li>
            <li className="md:border-y-2 md:pt-4 md:pr-10 md:w-full md:self-end">
              <h3 className="text-blue font-sans opacity-70">
                Transactions analyzed
              </h3>
              <p className="text-dark-pink font-serif text-750 font-bold opacity-100">
                10M+
              </p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col text-center justify-center gap-8 mt-16 mx-8 mb-20 md:text-left md:gap-14">
          <div className="flex flex-col md:flex-row md:gap-2">
            <h2 className="text-blue text-2xl font-bold md: w-full md:text-3xl">
              The Culture
            </h2>
            <p>
              We strongly believe there's always an opportunity to learn from
              each other outside of day-to-day work, whether it's company-wide
              offsites, internal hackathons, or co-worker meetups. We always
              value cross-team collaboration and diversity of thought, no matter
              the job title.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:gap-6">
            <h2 className="text-blue text-2xl font-bold md: w-1/2 md:text-3xl">
              The People
            </h2>
            <p>
              We're all passionate about building a more efficient and inclusive
              financial infrastructure together. At PayAPI, we have diverse
              backgrounds and skills.
            </p>
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default About;
