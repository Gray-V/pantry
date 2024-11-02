// src/Footer.js
import React, { useState } from 'react';
import { db, serverTimestamp } from './firebase';
import { collection, addDoc } from "firebase/firestore";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter an email.");
      return;
    }

    try {
      await addDoc(collection(db, "emails"), {
        email: email,
        subscribedAt: serverTimestamp(),
      });
      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      setMessage("Error adding email. Please try again.");
      console.error("Error adding email: ", error);
    }
  };

  return (
    <footer className="footer">
      {/* Remaining footer content */}
      <div className="newsletter">
        <h2>Stay in the Loop</h2>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </footer>
  );
};

export default Footer;
