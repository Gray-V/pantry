// src/App.js
import React from 'react';
import Header from './Header';
import About from './About';
import Features from './Features';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
