import React from 'react';

class Navbar extends React.Component{
  render(){

    return (
    <div className="navBar">
      <h2 className="nav">Project Navigation</h2>
      <button className= "navButton" id='projects'><a href='https://github.com/JayZonday'>GitHub Portfolio</a></button>
      <button className= "navButton" id='youtubes'><a href='https://www.youtube.com/channel/UCPQZKbLIPNYr36qVVAwkI6Q?view_as=subscriber'>YouTube Portfolio</a></button>
      <button className= "navButton" id='ffAdvice'>FF2018 Advice</button>
      <button className= "navButton" id='contact' >Contact</button>
    </div>
    )
  }
}

export default Navbar
