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
    <header
      className="
      z-10
    w-full
    bg-transparent
    text-white
    px-6 py-8
    "
    >
      <nav className="flex items-center justify-between">
        <Link onClick={() => setToggle(false)} href="/">
          <Image src={payAPILogo} alt="pay API logo" />
        </Link>

        <ul className="hidden">
          {navItems.map((item, index) => (
            <NavigationItem key={index} onClick={toggleHamburgerMenu} href="#">
              {item}
            </NavigationItem>
          ))}
        </ul>

        {toggle && (
          <ul className="fixed bg-cyan-900 top-0 left-0 bottom-0 w-60 h-screen flex flex-col gap-5 transform translate-x-full opacity-1 transition-transform duration-400">
            {navItems.map((item, index) => (
              <NavigationItem
                key={index}
                onClick={toggleHamburgerMenu}
                href="#"
              >
                {item}
              </NavigationItem>
            ))}
          </ul>
        )}
        <Hamburger
          onToggleHamburgerMenu={toggleHamburgerMenu}
          toggle={toggle}
        />
      </nav>
    </header>
  );
}
