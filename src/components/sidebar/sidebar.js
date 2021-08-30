import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import {sidebarContainer,sidebarIcon, sidebarWrapper, sidebarMenu, sidebarLinks} from "./sidebar.styles.css";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <aside
        className={sidebarContainer}
        style={{ opacity: isOpen ? "100%" : "0",  top: isOpen ? "0%" : "-100%" }}  
        onClick={toggle}
      >
        <div className={sidebarIcon} onClick={toggle}>
          <FaTimes />
        </div>
        <div className={sidebarWrapper}>
          <div className={sidebarMenu}>
            <Link className={sidebarLinks} to="home" onClick={toggle}>
              Home
            </Link>
            <Link className={sidebarLinks} to="about" onClick={toggle}>
              About
            </Link>
            <Link className={sidebarLinks} to="blog" onClick={toggle}>
              Blog
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;