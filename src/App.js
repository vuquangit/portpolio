import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Header from './components/Header'
import Like from './components/Facebooks/Like'
import Service from  './components/Service'

function App() {
    return <div>
      <Navigation />
      <Header />
      <Service />
      <Like />
    </div>
}

export default App;
