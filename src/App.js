import React from 'react';
import Button from './components/Button';
import Portrait from './components/Portrait';
import './App.css';
import ben from './images/ben.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Portrait image={ben} border="dashed" borderColor="#bebbeb" />
        <p>
          Something good is on the way...
          <span role="img" aria-label="Bus Emoji">
            🚌
          </span>
        </p>
        <Button>Notify Me</Button>
      </header>
    </div>
  );
}

export default App;
