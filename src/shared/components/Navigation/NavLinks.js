import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  const { CNames } = props;
  return (
    <ul
      className={`${CNames ? CNames.join(" ") : "nav-links"} `}
      style={props.styles}
    >
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>

      {/* Uncomment to show about section */}
      {/* <li>
            <NavLink to="/about">About</NavLink>
          </li> */}

      <li>
        <NavLink to="/connect">Connect</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
