import React from 'react';
import './App.css';
import DrumPad from './DrumPad';
import Data from "./data";

function App() {

  return (
    <div className="App" id='drum-machine'>
      <h1 id='display'>Click or press the key!</h1>
      <div className='pad-container'>
      {
        Data.map(item => (
          <DrumPad picture={item.picture} id={item.id} letter={item.letter} src={item.src} key={item.id} />
        ))
      }
      </div>
    </div>
  );
}

export default App;
