import React from "react";

export default class Intro extends React.Component {
  render() {
    return (
      <div className={this.props.classNameIntro}>
        {this.props.value}
      </div>
    );
  }
}
