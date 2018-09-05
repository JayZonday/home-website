import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jay Zonday</h1>
        </header>
        <p className="App-intro">
          Welcome to Joe Moloughney's corner of the Web
        </p>
        <p id="mission">An eager and highly motivated full-stack web developer looking to
        apply my wide range of skills to create and build beautiful
        and intelligently designed programs that can help change
        and shape the way we think about tomorrow.</p>
        <Navbar/>
      </div>
    );
  }
}

export default App;
