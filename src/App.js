import React from 'react';
//import './App.css';
import Navigation from './components/Navigation'
import Header from './components/Header'
import Like from './components/Facebooks/Like'
// import Service from  './components/Service'
import Service2 from './components/Service2'
import PortfolioGrid from './components/PortfolioGird'
import AboutPortfolio from './components/About'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PortfolioModals from './components/PortfolioModals'

function App() {
    return <div>
      <Navigation />
      <Header />
      {/* <Service /> */}
      <Service2 />
      <PortfolioGrid />>
      <AboutPortfolio />
      <Team />
      <Contact />
      <Footer />
      <PortfolioModals />
      <Like />
    </div>
}

export default App;
