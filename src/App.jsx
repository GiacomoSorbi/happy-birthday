import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <span role="img" label="Birthday Cake">
            🎂
          </span>
          Welcome... What is your name?
          <span role="img" label="Birthday Cake">
            🎂
          </span>
        </p>
        <p>📅</p>
      </header>
    </div>
  );
}

export default App;
