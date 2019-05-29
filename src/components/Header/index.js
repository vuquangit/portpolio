import React from "react";
import "./header.scss";
import Intro from "./intro";
import { Button } from "antd";
import img_bg from "../../img/IMG_2508.JPG";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img className="header-img" src={img_bg} alt="header-img" />
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
          <Link to="/Login">
            <Button type="primary" className="btn__intro">
              Chàng Gió
            </Button>
          </Link>
        </div>
        <div className="header-foreground" />
      </header>
    );
  }
}
