import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = 'REACT';
    return (
      <div className="App">
        <h1>Hello {name}</h1>
        <p><img src={logo} className="App-logo" alt="logo" /></p>
      </div>
    );
  }
}

export default App;