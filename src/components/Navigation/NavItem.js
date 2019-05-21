import React from "react";
//import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";

const NavItem = ({ menu, id }) => (
  // <NavLink
  //   to={"/" + id}
  //   //activeClassName={id !== "" ? "active" : ""}
  //   className="nav-link"
  // >
  //   {menu}
  // </NavLink>
  <LinkContainer to={"/" + id} activeClassName={id !== "" ? "active" : ""}>
    <Nav.Link href=" ">{menu}</Nav.Link>
  </LinkContainer>
);

export default NavItem;
