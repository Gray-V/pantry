import React, { useState, useEffect } from 'react';
import './SineWaveText.css';

const SineWaveText = () => {
  const [position, setPosition] = useState(0);
  const screenWidth = window.innerWidth;
  const text = "  G  e t   I n  s p  i r e  d   w  it h   P  a n  t r y      ".repeat(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prevPosition => (prevPosition + .5) % screenWidth);
    }, 20);
    return () => clearInterval(interval);
  }, [screenWidth]);

  const sineWaveStyle = (index) => ({
    position: 'absolute',
    left: `${(position + index * 25) % screenWidth}px`,
    top: `${80 + 90 * Math.sin((position + index) / 10)}px`,
  });

  return (
    <div className="sine-wave-container">
      {text.split('').map((char, index) => (
        <span key={index} style={sineWaveStyle(index)}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default SineWaveText;
