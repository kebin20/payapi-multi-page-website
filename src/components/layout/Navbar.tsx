import React, { useState } from "react";
import payAPILogo from "../../assets/shared/desktop/logo.svg";
import Link from "next/link";
import Image from "next/image";
import NavigationItem from "./NavigationItem";
import Hamburger from "./Hamburger";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  function toggleHamburgerMenu() {
    setToggle((prevToggle) => !prevToggle);
  }

  const navItems = ["Pricing", "About", "Contact"];

  return (
    <header>
      <nav>
        <Hamburger
          onToggleHamburgerMenu={toggleHamburgerMenu}
          toggle={toggle}
        />
        <Link onClick={() => setToggle(false)} href="/">
          <Image src={payAPILogo} alt="pay API logo" />
        </Link>

        <ul>
          {navItems.map((item, index) => (
            <NavigationItem key={index} onClick={toggleHamburgerMenu} href="#">
              {item}
            </NavigationItem>
          ))}
        </ul>
      </nav>
    </header>
  );
}
