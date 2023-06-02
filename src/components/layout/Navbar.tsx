import React, { useState } from "react";
import payAPILogo from "../../assets/shared/desktop/logo.svg";
import Link from "next/link";
import Image from "next/image";
import NavigationItem from "./NavigationItem";
import Hamburger from "./Hamburger";
import { PrimaryButton } from "../UI/Buttons";

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
          <>
            <ul className="bg-dark-blue fixed top-0 right-0 bottom-0 w-72 h-screen flex flex-col items-center gap-5 transform -translate-x opacity-1 z-10 transition-transform duration-40 pt-24 bg-pattern-circle-hero">
              {navItems.map((item, index) => (
                <NavigationItem
                  key={index}
                  onClick={toggleHamburgerMenu}
                  href={`#${item}`}
                >
                  {item}
                </NavigationItem>
              ))}
              <PrimaryButton>Schedule a Demo</PrimaryButton>
            </ul>
          </>
        )}
        <Hamburger
          onToggleHamburgerMenu={toggleHamburgerMenu}
          toggle={toggle}
        />
      </nav>
    </header>
  );
}
