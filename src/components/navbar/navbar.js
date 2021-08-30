import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "gatsby";
import { animateScroll as scroll } from "react-scroll";
import { StaticImage } from "gatsby-plugin-image";

import {
  navbar,
  navbarContainer,
  navMenu,
  navItem,
  navLinks,
  logo,
  menuIcon,
} from "./navbar.styles.css";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(0);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
     <div>
          <StaticImage
            src="../images/logo_transparent.png"
            alt="logo"
            className={logo}
            onClick={toggleHome}
          />
      </div>
      <nav
        className={navbar}
        scrollNav={true.toString()}
        style={{ background: scrollNav ? "#005243" : "transparent" }}
      >
        <div className={navbarContainer}>
          <div className={menuIcon} onClick={toggle}>
            <FaBars />
          </div>
          <ul className={navMenu}>
            <li className={navItem}>
              <Link to="/" className={navLinks}>
                Home
              </Link>
            </li>
            <li className={navItem}>
              <Link to="/about" className={navLinks}>
                About
              </Link>
            </li>
            <li className={navItem}>
              <Link to="/blog" className={navLinks}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
