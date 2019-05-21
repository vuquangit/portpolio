import React, { Component } from "react";
import NavItem from "./NavItem";
import "./Nav.scss";
import { Navbar, Nav, FormControl, Button } from "react-bootstrap";
import myLogo from "../../img/MyLogo.jpg";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  state = {
    navList: [
      { menu: "HOME", id: "" },
      { menu: "Service", id: "service" },
      { menu: "Portfolio", id: "portfolio" },
      { menu: "About", id: "about" },
      { menu: "Team", id: "team" },
      { menu: "Contact", id: "contact" },
      { menu: "Fetch API", id: "fetch-api" }
    ]
  };

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to={`/`}>
            <img
              src={myLogo}
              width="30"
              height="30"
              alt="Chang Gio logo"
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {this.state.navList.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </Nav>
          <Nav>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
