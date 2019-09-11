import React, { useState } from 'react';
import { ButtonPrimary, ButtonDanger, BorderBox } from '@primer/components';
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
        {showForm ? (
          <ButtonDanger onClick={() => setShowForm(false)}>
            Nevermind
          </ButtonDanger>
        ) : (
          <ButtonPrimary onClick={() => setShowForm(true)}>
            Notify Me
          </ButtonPrimary>
        )}

        {showForm && (
          <BorderBox p={4} mt={4}>
            <Form />
          </BorderBox>
        )}
      </header>
    </div>
  );
}

export default App;
