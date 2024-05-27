import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import MobileSideDrawer from "./MobileSideDrawer";
import Backdrop from "../../../shared/components/UIElements/Backdrop";

import "./MainNavigation.css";

const MobileDrawerStyle = {
  drawer: {
    width: "80vw",
  },
  nav: {
    style: {
      display: "block",
    },
    classNames: ["nav-links-mobile"],
  },
};

const MainNavigation = (props) => {
  const [drawerIsOpen, drawerOpenToggle] = useState(false);

  const toggleDrawer = () => {
    if (drawerIsOpen) {
      // close drawer
      MobileDrawerStyle.display = "none";
      drawerOpenToggle(false);
    } else {
      // open drawer
      MobileDrawerStyle.display = "block";
      drawerOpenToggle(true);
    }
  };

  return (
    <Fragment>
      {drawerIsOpen && <Backdrop onClick={toggleDrawer}/>}

      <SideDrawer
        className="main-navigation__drawer-nav"
        show={true}
      >
        <h1 className="main-navigation__title font-roboto">
          <Link to="/">MARLEE GERARD</Link>
        </h1>

        <NavLinks />
      </SideDrawer>

      {/* Mobile Drawer */}
      <MobileSideDrawer
        className="main-navigation__mobile-drawer-nav"
        show={drawerIsOpen}
        styles={MobileDrawerStyle.drawer}
        onClick={toggleDrawer}
      >
        <h1 className="main-navigation__mobile-title">
          <Link to="/">MARLEE GERARD</Link>
        </h1>

        <NavLinks
          styles={MobileDrawerStyle.nav.style}
          CNames={MobileDrawerStyle.nav.classNames}
        />
      </MobileSideDrawer>

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={toggleDrawer}>
          <span />
          <span />
          <span />
        </button>

        <h1 className="main-navigation__title_in_header font-roboto">
          <Link to="/">Marlee Gerard</Link>
        </h1>

        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </Fragment>
  );
};

export default MainNavigation;