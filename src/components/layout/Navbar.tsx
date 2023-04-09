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
        <Link onClick={() => setToggle(false)} to="/">
          <Image className="logo" src={payAPILogo} alt="pay API logo" />
        </Link>

        <nav className="main-nav">
          <ul className="main-menu">
            <li>
              <Link
                onClick={() => setToggle(false)}
                to="/"
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setToggle(false)}
                to="/aboutus"
                className="nav-link"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setToggle(false)}
                to="/subscribe"
                className="nav-link"
              >
                Create Your Plan
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setToggle(false)}
                to="/coffee"
                className="nav-link"
              >
                Coffee
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setToggle(false)}
                to="/registration"
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
              to="/"
              className={styles.menuLink}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              to="/aboutus"
              className={styles.menuLink}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              to="/subscribe"
              className={styles.menuLink}
            >
              Create Your Plan
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              to="/coffee"
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
