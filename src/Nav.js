import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "#614476",
  fontWeight: "bold"
};

export const Nav = () => (
  // screen reader will announce navigation when it gets to the <nav> tag
  <nav className="navbar">
    <NavLink activeStyle={activeStyle} to="/" exact>
      Home
    </NavLink>
    <NavLink activeStyle={activeStyle} to="/users">
      Users
    </NavLink>
    {/* <NavLink activeStyle={activeStyle} to="/manageuser">
      Manage Users
    </NavLink> */}
  </nav>
);
