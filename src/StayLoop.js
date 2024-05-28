import React from 'react';
import './App.css';

const StayLoop = () => {
  return (
    <div className="loop">
      <h1>Stay In The Loop</h1>
      <p>Sign Up With Your Email Address To Receive News & Updates.</p>
      <form className="email-form">
        <div className="form-group">
          <input type="email" id="email" name="email" placeholder="Email Address" required />
        </div>
        <button type="submit" className="submit-button">SIGN UP</button>
      </form>
    </div>
  );
}

export default StayLoop;
