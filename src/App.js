import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Header from './components/Header'
import Like from './components/Facebooks/Like'
// import Service from  './components/Service'
import Service2 from './components/Service2'
import PortfolioGrid from './components/PortfolioGird'

function App() {
    return <div>
      <Navigation />
      <Header />
      {/* <Service /> */}
      <Service2 />
      <PortfolioGrid />>
      <Like />
    </div>
}

export default App;
