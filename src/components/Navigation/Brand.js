import React from "react";

export default class Brand extends React.Component {
  render() {
    return (
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        {this.props.value}
      </a>
    );
  }
}
