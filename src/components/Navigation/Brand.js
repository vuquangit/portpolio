import React from "react";
import myLogo from "../../img/MyLogo.jpg";
import { Link } from "react-router-dom";

export default class Brand extends React.Component {
  render() {
    return (
      <div className="navbar-brand">      
        <Link to={`/`} > 
          <img src={myLogo} width="30" height="30" alt="" className="d-inline-block align-top" />
          {this.props.value}
        </Link>     
      </div>
    );
  }
}
