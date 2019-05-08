import React from "react";
import Header from "../../components/Header";
// import Like from "../../components/Facebooks/Like";
import Service2 from "../../components/Service2";
import PortfolioGrid from "../../components/PortfolioGird";
import AboutPortfolio from "../../components/About";
import Team from "../../components/Team";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
//import PortfolioModals from "../../components/PortfolioModals";
import { Switch, Route } from "react-router-dom";
import { Page404 } from "../404";

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
        {/* <Like /> */}
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default Homepage;