import React, { useState } from 'react';
import Button from './components/Button';
import logo from './logo.svg';
import './App.css';

function App() {
  const []

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Something good is on the way{' '}
          <span role="img" aria-label="Bus Emoji">
            🚌
          </span>
          ...
        </p>
        <Button title="Notify Me" onClickHandler={() => handleNotification()} />
      </header>
    </div>
  );
}

export default App;
