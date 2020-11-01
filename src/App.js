import React, { useState } from 'react';
import './App.css';
import DrumPad from './DrumPad';
import Data from './data';

function App() {
  const [display, setDisplay] = useState('Click or press the key!');
  const handleDisplay = (display) => {
    setDisplay( display );
  };
  return (
    <div className="App" id="drum-machine">
      <h1 id="display">{display}</h1>
      <div className="pad-container">
        {Data.map((item) => (
          <DrumPad
            picture={item.picture}
            id={item.id}
            letter={item.letter}
            src={item.src}
            key={item.id}
            handleDisplay={handleDisplay}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
