import React from "react";
import myLogo from "../../img/MyLogo.jpg";

export default class Brand extends React.Component {
  render() {
    return (
      <div>
        <img className="myLogo" src={myLogo} alt="My Logo" style={{height:"40px", width:"auto"}} />
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          {this.props.value}
        </a>
      </div>
    );
  }
}
