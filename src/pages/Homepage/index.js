import React from "react";
import Header from "../../components/Header";
import Service2 from "../../components/Service2";
import PortfolioGrid from "../../components/PortfolioGird";
import AboutPortfolio from "../../components/About";
import Team from "../../components/Team";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import { Switch, Route } from "react-router-dom";
import { Page404 } from "../404";
import FetchAPI from "../../components/FetchAPI";
import Login from "../../components/Login";

function Homepage() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/service" component={Service2} />
        <Route path="/portfolio" component={PortfolioGrid} />
        <Route path="/about" component={AboutPortfolio} />
        <Route path="/team" component={Team} />
        <Route path="/contact" component={Contact} />
        <Route path="/footer" component={Footer} />
        <Route path="/fetch-api" component={FetchAPI} />
        <Route path="/Login" component={Login} />      
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default Homepage;
