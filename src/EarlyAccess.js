import React from 'react';
import './App.css';

const EarlyAccess = () => {
  return (
    <div className="content">
      <div className="info">
        <p>Join Pantry And Discover Endless Culinary Possibilities!</p>
        <p>Here's To Rediscovering The Joy Of Cooking And Sharing — Because Food Tastes Better When Shared With Others.</p>
        <div className="app-icon">
          <img src={require('./images/raccoon.png')} alt="Pantry App Icon" />
        </div>
      </div>
      
      <form className="access-form">
        <div className="form-group-inline">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit" className="register-button">REGISTER</button>
      </form>
    </div>
  );
}

export default EarlyAccess;
