import React, { useState } from "react";
import payAPILogo from "../../assets/shared/desktop/logo.svg";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  function toggleHamburgerMenu() {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <header>
      <div className="nav-container">
        <Link onClick={() => setToggle(false)} href="/">
          <Image src={payAPILogo} alt="pay API logo" />
        </Link>

        <nav className="main-nav">
          <ul className="main-menu">
            <li>
              <Link
                onClick={() => setToggle(false)}
                href="/"
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setToggle(false)}
                href="/aboutus"
                className="nav-link"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setToggle(false)}
                href="/subscribe"
                className="nav-link"
              >
                Create Your Plan
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setToggle(false)}
                href="/coffee"
                className="nav-link"
              >
                Coffee
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setToggle(false)}
                href="/registration"
                className="nav-link"
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>

        <button onClick={toggleHamburgerMenu} className="hamburger-menu">
          <span className={`hamburger-top ${toggle && "open"}`}></span>
          <span className={`hamburger-middle ${toggle && "open"}`}></span>
          <span className={`hamburger-top ${toggle && "open"}`}></span>
        </button>
      </div>

      {/* {toggle && (
        <nav>
        <ul className={styles.mobileMenuItems}>
          <li>
            <Link
              onClick={() => setToggle(false)}
              href="/"
              className={styles.menuLink}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              href="/aboutus"
              className={styles.menuLink}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              href="/subscribe"
              className={styles.menuLink}
            >
              Create Your Plan
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              href="/coffee"
              className={styles.menuLink}
            >
              Coffee
            </Link>
          </li>
        </ul>
                </nav>
      )} */}
    </header>
  );
}
