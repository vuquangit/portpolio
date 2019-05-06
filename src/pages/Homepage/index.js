import React from "react";
import Header from "../../components/Header";
import Like from "../../components/Facebooks/Like";
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
      <Header />
      <Switch>
        <Route exact path="/Service2" component={Service2} />
        <Route exact path="/PortfolioGrid" component={PortfolioGrid} />
        <Route exact path="/AboutPortfolio" component={AboutPortfolio} />
        <Route exact path="/Team" component={Team} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Footer" component={Footer} />
        {/* <Like /> */}
      </Switch>
    </div>
  );
}

export default Homepage;
