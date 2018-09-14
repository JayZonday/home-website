import React from 'react';

class SocNavbar extends React.Component{
  render(){

    return (
    <div className="SocNavBar">
      <h2 className="nav">Social Media</h2>
      <button className= "SocNavButton" id='facebook'><a href='https://www.facebook.com/JM.KID?ref=br_rs'>Facebook</a></button>
      <button className= "SocNavButton" id='twitter'><a href='https://twitter.com/jayzonday'>Twitter</a></button>
      <button className= "SocNavButton" id='instagram' ><a href='https://www.instagram.com/jayz0nday/'>Instagram</a></button>
      <button className= "SocNavButton" id='linkedin' ><a href='https://www.linkedin.com/in/josephmoloughney/'>LinkedIn</a></button>
    </div>
    )
  }
}

export default SocNavbar
