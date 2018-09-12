import React from 'react';

class Navbar extends React.Component{
  render(){

    return (
    <div className="navBar">
      <button className= "navButton" id='projects'><a href='https://github.com/JayZonday'>Projects</a></button>
      <button className= "navButton" id='ffAdvice'>FF2018 Advice</button>
      <button className= "navButton" id='contact' >Contact</button>
    </div>
    )
  }
}

export default Navbar
