import Link from "next/link";
import Image from "next/image";
import payAPILogo from "../../assets/shared/desktop/logo.svg";

function Footer() {
  const navItems = ["Pricing", "About", "Contact"];

  return (
    <footer>
      <Link href="/">
        <Image src={payAPILogo} alt="pay API logo" />
      </Link>

      <ul>
        {navItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
