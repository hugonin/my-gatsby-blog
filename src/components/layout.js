import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "./footer";
import {
  pageHeaderContent,
  navLinks,
  navLinkItem,
  navLinkText,
  logo,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <div className={pageHeaderContent}>
        <Link to="/">
          <StaticImage
            src="../images/logo_transparent.png"
            alt="logo"
            className={logo}
          />
        </Link>

        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link
                to="/"
                className={navLinkText}
                activeStyle={{
                  borderBottom: "3px solid #005243",
                  color: "#005243",
                }}
              >
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link
                to="/about"
                className={navLinkText}
                activeStyle={{
                  borderBottom: "3px solid #005243",
                  color: "#005243",
                }}
              >
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link
                to="/blog"
                className={navLinkText}
                activeStyle={{
                  borderBottom: "3px solid #005243",
                  color: "#005243",
                }}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
