// src/Features.js
import React from 'react';
import './App.css';
import phoneImage from './images/phone.png'; // Adjust the path if needed

const Features = () => {
  return (
    <section className="features">
      <div className="feature-section">
        <div className="feature-text">
          <h3>Pantry Paws Assist</h3>
          <p>AI-guided cooking lessons. Description description description...</p>
        </div>
        <div className="feature-images">
          <img src={phoneImage} alt="App on phone" className="phone-image" />
        </div>
      </div>

      <div className="feature-section reverse">
        <div className="feature-text">
          <h3>My Pantry</h3>
          <p>AI smart search and meal planner. Description description description...</p>
        </div>
        <div className="feature-images">
          <img src={phoneImage} alt="App on phone" className="phone-image" />
        </div>
      </div>

      <div className="feature-section">
        <div className="feature-text">
          <h3>Pantry Shop</h3>
          <p>AI curated E-Shop. Description description description...</p>
        </div>
        <div className="feature-images">
          <img src={phoneImage} alt="App on phone" className="phone-image" />
        </div>
      </div>
    </section>
  );
};

export default Features;
