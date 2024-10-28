// src/Header.js
import React from 'react';
import './App.css';
import table from './images/chef-illustration.png';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">PANTRY</h1>
      <p className="subtitle">Your all-in-one food social media platform.</p>
      <img src={table} alt="Chef illustration" className="arrow" />
    </header>
  );
};

export default Header;
