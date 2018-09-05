import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js'
import Info from './Info.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Jay Zonday's <br/> Corner of the Web</h1>
          <div id="logo-container">
          <img src="https://cdn.dribbble.com/users/1334331/screenshots/4385778/untitled-1.gif" className="logo" alt="logo" />
          </div>
        </header>

        <p id="mission">
        <h1 id="statement">The Mission</h1>
        An eager and highly motivated
        full-stack web developer looking to
        apply my wide range of skills to create and build beautiful
        and intelligently designed programs that can help change
        and shape the way we think about tomorrow.
        </p>
        <Navbar/>
        <Info />
      </div>
    );
  }
}

export default App;
