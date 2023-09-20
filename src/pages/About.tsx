/* eslint-disable react/no-unescaped-entities */
import NavBar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/layout/CallToAction";
import Image from "next/image";
import TeamMembersImage from "@/assets/about/mobile/image-team-members.jpg";

function About() {
  return (
    <div className="secondary-main">
      <NavBar />
      <main>
        <h1 className="text-4xl text-center text-blue font-bold leading-9 mx-6">
          We empower innovators by delivering access to the financial system
        </h1>
        <section className="grid grid-cols-1 text-center justify-center gap-8 mt-16 mx-8 mb-20">
          <h2 className="text-blue text-2xl font-bold">Our Vision</h2>
          <p>
            Our main goal is to build beautiful consumer experiences along with
            developer-friendly infrastructure. The result is an intelligent tool
            that gives everyone the ability to create amazing products that
            solve big problems. We are deeply focused on democratizing financial
            services through technology.{" "}
          </p>
          <h2 className="text-blue text-2xl font-bold">Our Business</h2>
          <p>
            At the core of our platform is the technical infrastructure APIs
            that connect consumers. Our innovative product provides key insights
            for businesses and individuals, as well as robust reporting for
            traditional financial institutions and developers.
          </p>
        </section>
        <section>
          <Image alt="team members" src={TeamMembersImage} />
          <ul className="flex flex-col justify-center text-center gap-4 border-y-2 border-gray p-6 my-10 mx-10">
            <li>
              <h3 className="text-blue font-sans opacity-70">Team Members</h3>
              <p className="text-dark-pink font-serif text-750 font-bold opacity-100">
                300+
              </p>
            </li>
            <li>
              <h3 className="text-blue font-sans opacity-70">
                Offices in the US
              </h3>
              <p className="text-dark-pink font-serif text-750 font-bold opacity-100">
                3
              </p>
            </li>
            <li>
              <h3 className="text-blue font-sans opacity-70">
                Transactions analyzed
              </h3>
              <p className="text-dark-pink font-serif text-750 font-bold opacity-100">
                10M+
              </p>
            </li>
          </ul>
        </section>
        <section className="grid grid-cols-1 text-center justify-center gap-8 mt-16 mx-8 mb-20">
          <h2 className="text-blue text-2xl font-bold">The Culture</h2>
          <p>
            We strongly believe there's always an opportunity to learn from each
            other outside of day-to-day work, whether it's company-wide
            offsites, internal hackathons, or co-worker meetups. We always value
            cross-team collaboration and diversity of thought, no matter the job
            title.
          </p>
          <h2 className="text-blue text-2xl font-bold">The People</h2>
          <p>
            We're all passionate about building a more efficient and inclusive
            financial infrastructure together. At PayAPI, we have diverse
            backgrounds and skills.
          </p>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default About;
