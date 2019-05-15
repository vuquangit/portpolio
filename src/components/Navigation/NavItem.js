import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const NavItem = ({ menu, id }) => (
  <Nav.Link>
    <NavLink
      to={"/" + id}
      activeClassName={id !== "" ? "active" : ""}
      className="nav-item"
    >
      {menu}
    </NavLink>
  </Nav.Link>
);

export default NavItem;
