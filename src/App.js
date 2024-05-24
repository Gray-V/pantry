import React from 'react';
import SineWaveText from './SineWaveText';
import './App.css';
import Socials from './Socials';
import EarlyAccess from './EarlyAccess';
import StayLoop from './StayLoop';

function App() {
  return (
    <div className="App">
      <Socials />
      <SineWaveText />
      <h1>Get Early App Access!</h1>
      <EarlyAccess />
      <StayLoop />
    </div>
    
  );
}

export default App;
