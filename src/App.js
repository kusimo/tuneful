import React, { useState } from 'react';
import './App.css';
import './Aside';
import Aside from './Aside';
import Main from './Main';
import Cue from './Cue';


const App = () => {

  const [currentAudio, setCurrentAudio] = useState(null);

  const updateCurrentAudio = (audio) => {
    setCurrentAudio(audio);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="red"></div>
        <div className="black"></div>
        <Aside />
        <Main updateCurrentAudio={updateCurrentAudio}  />
        <Cue audio={currentAudio} title="Now Playing" />
      </div>


    </div>
  );
}

export default App;
