// src/EmailList.js
import React, { useState } from "react";
import { db } from "./firebase";

function EmailList() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage("Please enter an email.");
      return;
    }

    try {
      await db.collection("emails").add({
        email: email,
        subscribedAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      setMessage("Error adding email. Please try again.");
      console.error("Error adding email: ", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default EmailList;
