import React, { useState } from "react";
import payAPILogo from "../../assets/shared/desktop/logo.svg";
import Link from "next/link";
import Image from "next/image";
import NavigationItem from "./NavigationItem";
import Hamburger from "../UI/Hamburger";
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
      <nav className="flex items-center justify-between lg:gap-20 lg:mx-36 lg:mt-2">
        <Link onClick={() => setToggle(false)} href="/">
          <Image src={payAPILogo} alt="pay API logo" />
        </Link>

        <ul className="hidden md:flex md:items-center md:gap-16 ">
          {navItems.map((item, index) => (
            <NavigationItem
              key={index}
              href={`/${item}`}
              className="md:text-blue"
            >
              {item}
            </NavigationItem>
          ))}
        </ul>
        <PrimaryButton className="hidden rounded-full md:block md:px-6 lg:ml-auto">
          Schedule a Demo
        </PrimaryButton>

        {toggle && (
          <>
            <ul className="bg-dark-blue text-xl fixed top-0 right-0 bottom-0 w-72 h-screen flex flex-col items-center gap-8 transform -translate-x opacity-1 z-10 transition-transform duration-40 pt-24 bg-pattern-circle-hero">
              <span className="w-60 h-0.5 rounded-sm bg-white opacity-5"></span>
              {navItems.map((item, index) => (
                <NavigationItem
                  key={index}
                  onClick={toggleHamburgerMenu}
                  href={`/${item}`}
                  className=""
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavigationItem>
              ))}
              <PrimaryButton className="text-base">
                Schedule a Demo
              </PrimaryButton>
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
