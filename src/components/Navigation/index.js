import React, { Component } from "react";
import NavItem from "./NavItem";
import Brand from "./Brand";
import "./Nav.scss";

export default class Navigation extends Component {
  state = {
    navList: [
      { menu: "Home", id: "" },
      { menu: "Service", id: "Service2" },
      { menu: "Portfolio", id: "PortfolioGrid" },
      { menu: "About", id: "AboutPortfolio" },
      { menu: "Team", id: "Team" },
      { menu: "Contact", id: "Contact" }
    ]
  };

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navbar-shrink"
          id="mainNav"
        >
          <div className="container">
            <Brand value="Chàng Gió" />
            <button
              className="navbar-toggler navbar-toggler-right collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                {this.state.navList.map((item, index) => (
                  <NavItem key={index} {...item} />
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
