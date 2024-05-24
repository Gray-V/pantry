import React from 'react';
import './App.css'; // Assuming you want to add some CSS styling

const Socials = () => {
  return (
    <div className="social-media-buttons">
      <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <img src={require('./images/insta.png')} alt="Instagram" />
      </a>
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <img src={require('./images/linkedin.png')} alt="LinkedIn" />
      </a>
      <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <img src={require('./images/fb.png')} alt="Facebook" />
      </a>
    </div>
  );
}

export default Socials;
