import Link from "next/link";
import Image from "next/image";
import whitePayAPILogo from "../../assets/shared/desktop/logo-white.svg";
import faceBookLogo from "../../assets/shared/desktop/facebook.svg";
import TwitterLogo from "../../assets/shared/desktop/twitter.svg";
import LinkedInLogo from "../../assets/shared/desktop/linkedin.svg";
import NavigationItem from "./NavigationItem";

function Footer() {
  const navItems = ["pricing", "about", "contact"];

  return (
    <footer className="bg-dark-blue flex flex-col items-center bg-pattern-circle-footer md:flex-row md:justify-around lg:gap-72">
      <div className="flex flex-col items-center md:flex-row md:gap-12">
        <Link href="/">
          <Image
            src={whitePayAPILogo}
            alt="pay API logo"
            className="m-14 md:m-2"
          />
        </Link>
        <ul className="flex flex-col gap-8 text-white font-bold md:flex-row">
          {navItems.map((item, index) => (
            <NavigationItem
              key={index}
              href={`/${item}`}
              className="md:text-white"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavigationItem>
          ))}
        </ul>
      </div>
      <div className="flex gap-8 p-10">
        <Image src={faceBookLogo} alt="Facebook logo" />
        <Image src={TwitterLogo} alt="Twitter logo" />
        <Image src={LinkedInLogo} alt="LinkedIn logo" />
      </div>
    </footer>
  );
}

export default Footer;
