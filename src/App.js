import React, { useState } from 'react';
import Button from './components/Button';
import Portrait from './components/Portrait';
import './App.css';
import ben from './images/ben.jpg';
import Form from './components/Form';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Portrait image={ben} borderColor="#bebbeb" />
        <p>
          Something good is on the way...
          <span role="img" aria-label="Bus Emoji">
            🚌
          </span>
        </p>
        <Button onClick={() => setShowForm(!showForm)}>Notify Me</Button>
        {showForm && <Form />}
      </header>
    </div>
  );
}

export default App;
