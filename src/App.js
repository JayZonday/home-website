import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js'
import SocNavbar from './SocNavbar.js'
import Info from './Info.js'
import Interests from './Interests.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Jay Zonday's <br/> Corner of the Web</h1>
          <div id="logo-container">
          <img src="https://cdn.dribbble.com/users/101577/screenshots/4875999/true_astronaut_dribbble-bg.gif" className="logo" alt="logo" />
          </div>
        </header>

        <p id="mission">
        <h2 id="statement">The Mission</h2>
        An eager and highly motivated
        full-stack web developer looking to
        apply my wide range of skills to create and build beautiful
        and intelligently designed programs that can help change
        and shape the way we think about tomorrow.
        </p>
        <Navbar/>
        <SocNavbar/>
        <Info />
      </div>
    );
  }
}

export default App;
