import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Router, Link } from "@reach/router";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

import {
  siteFooter,
  footerMain,
  footerLogo,
  footerFineprint,
  footerEmail,
  socialList,
  socialListItem,
  socialListLink,
} from "./layout.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={siteFooter}>
        <div className={footerMain}>
        <Link to="/">
          <StaticImage
            src="../images/logo_transparent.png"
            alt="logo"
            className={footerLogo}
          />
        </Link>
          <p className={footerFineprint}>
            © {new Date().getFullYear()} Hugonin
            {` `}
            <a className={footerEmail} href="#">hugonin@dev.com</a>
          </p>
        </div>
        <ul className={socialList}>
          <li className={socialListItem}>
            <Link to="https://www.linkedin.com/in/jhdoumbekingue/" className={socialListLink}>
              <FaLinkedin />
            </Link>
          </li>
          <li className={socialListItem}>
            <Link to="https://twitter.com/JhDoumbe" className={socialListLink}>
              <FaTwitter />
            </Link>
          </li>
          <li className={socialListItem}>
            <Link to="https://github.com/hugonin" className={socialListLink}>
              <FaGithub />
            </Link>
          </li>
        </ul>

        <Router>
          <FaLinkedin path="https://www.linkedin.com/in/jhdoumbekingue/" />
          <FaTwitter path="https://twitter.com/JhDoumbe" />
          <FaGithub path="https://github.com/hugonin" />
        </Router>
      </footer>
    </div>
  );
};

export default Footer;