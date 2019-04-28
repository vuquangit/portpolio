import React from "react";
import "./header.scss";
import Intro from "./intro";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header-img">
        <div className="container">
          <div className="intro-text">
            <Intro
              classNameIntro="intro-lead-in text text__sub-intro italic"
              value="Welcome To My Website"
            />
            <Intro
              classNameIntro="intro-heading text-uppercase text__intro"
              value="It's nice to meet you"
            />
          </div>
          <div className="header-foreground" />
        </div>
      </header>
    );
  }
}
