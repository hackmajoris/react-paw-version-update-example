import React from 'react';
import logo from './logo.svg';
import './App.css';
import propTypes from 'prop-types';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          Try 22
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


    </div>


  );

}

// @ts-ignore
App.propTypes = {
  callback: propTypes.object
};




export default App;
