import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navWrapper">
      <ul className="navigasyonWrapper">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/user">User</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
