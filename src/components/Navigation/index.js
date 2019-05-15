import React, { Component } from "react";
import NavItem from "./NavItem";
import "./Nav.scss";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
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
      //sticky="top": Not supported in <= IE11 and other older browsers without a polyfill
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
        id="main-navbar"
      >
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
          <Nav className="mr-auto" variant="pills">
            {this.state.navList.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
