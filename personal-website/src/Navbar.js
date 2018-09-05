import React from 'react';

class Navbar extends React.Component{
  render(){

    return (
    <div className="navBar">
      <button className= "navButton" id='projects'>Projects</button>
      <button className= "navButton" id='ffAdvice' >FF2018 Advice</button>
      <button className= "navButton" id='resume' >Resume(PDF)</button>
      <button className= "navButton" id='login' >Contact</button>
    </div>
    )
  }
}

export default Navbar
