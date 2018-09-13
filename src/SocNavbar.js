import React from 'react';

class SocNavbar extends React.Component{
  render(){

    return (
    <div className="navBar">
      <button className= "navButton" id='facebook'><a href='https://www.facebook.com/JM.KID?ref=br_rs'>Facebook</a></button>
      <button className= "navButton" id='twitter'><a href='https://twitter.com/jayzonday'>Twitter</a></button>
      <button className= "navButton" id='linkedin' ><a href='https://www.instagram.com/jayz0nday/'>Instagram</a></button>
      <button className= "navButton" id='linkedin' ><a href='https://www.linkedin.com/in/josephmoloughney/'>LinkedIn</a></button>
    </div>
    )
  }
}

export default SocNavbar
