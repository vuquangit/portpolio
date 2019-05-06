import React from "react";
import myLogo from "../../img/MyLogo.jpg";
import { Link } from "react-router-dom";

export default class Brand extends React.Component {
  render() {
    return (
      <div>
        <img
          className="myLogo"
          src={myLogo}
          alt="My Logo"
          style={{ height: "40px", width: "auto" }}
        />
        <Link to={`/`} className="navbar-brand js-scroll-trigger">
          {this.props.value}
        </Link>
      </div>
    );
  }
}
