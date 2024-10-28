// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="tailored-features">
        <h2>Tailor-Made Features</h2>
        <div className="feature-list">
          <div>
            <h3>Robust Workflow</h3>
            <p>[Placeholder for description]</p>
          </div>
          <div>
            <h3>Flexibility</h3>
            <p>[Placeholder for description]</p>
          </div>
          <div>
            <h3>User Friendly</h3>
            <p>[Placeholder for description]</p>
          </div>
        </div>
      </div>
      <div className="newsletter">
        <h2>Stay in the Loop</h2>
        <p>Sign up for our Newsletter. Embark on your all-new cooking journey soon.</p>
        <input type="email" placeholder="you@example.com" />
        <button>Sign Up</button>
      </div>
      <div className="footer-links">
        <p>Download Now | License | About | Features | Pricing | Careers | Help | Privacy Policy</p>
        <p>© 2024 Pantry. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
