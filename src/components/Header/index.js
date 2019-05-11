import React from "react";
import "./header.scss";
import Intro from "./intro";
import { Button } from "antd";
import imgbg from "../../img/IMG_2508.JPG";
import {Link, Switch, Route } from 'react-router-dom';
import Login from '../Login/index'

export default class Header extends React.Component {
  render() {
    return (          
      <Switch>
        <Route exact path="/" component={HeaderContent}/>
        <Route path="/Login" component={Login} />
      </Switch>
    );
  }
}

function HeaderContent() {
  return(
    <header className="header">
      <img className="header-img" src={imgbg} alt="header-img" />
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
        <Link to="/Login" >
          <Button type="primary" className="btn__intro">
            Chàng Gió Timeline
          </Button>
        </Link>
        <div className="header-foreground" /> 
      </div>
    </header>
  )
}