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

function Homepage() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/service" component={Service2} />
        <Route exact path="/portfolio" component={PortfolioGrid} />
        <Route exact path="/about" component={AboutPortfolio} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/footer" component={Footer} />
        {/* <Like /> */}
      </Switch>
    </div>
  );
}

export default Homepage;
