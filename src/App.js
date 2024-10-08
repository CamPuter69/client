import React from 'react';
import logo from './logo.svg';
import './App.css';
import RazorpayButton from './components/RazorpayButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Razorpay Payment Gateway Integration */}
      <div>
        <h1>Razorpay Payment Gateway Integration</h1>
        <RazorpayButton />
      </div>
    </div>
  );
}

export default App;
