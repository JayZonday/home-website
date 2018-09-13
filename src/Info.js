import React from 'react';

class Info extends React.Component{
  render(){

    return (
    <div className="about">

    <p id="interests">
    <h1 id="statement">Hobbies & Interests</h1>
          <li>Painting</li>
          <li>Drawing</li>
          <li>Fantasy Sports</li>
          <li>Cooking</li>
          <li>Hiking</li>
          <li>Photography</li>
          <li>Tech Meetups & Events</li>
          <li>Video Games</li>
          <li>Coding</li>
          <li>Cars</li>
      </p>
      <p id="education">
      <h1 id="statement">Education</h1>
        <h3> <a href='https://stockton.edu/'>Stocton University  Graduate 2016</a></h3>
        <h3> <a href='https://flatironschool.com/'>Flatiron School  Graduate 2018</a></h3>
      </p>


      <p id="experiences">
      <h1 id="statement">Experiences & Achievements</h1>
      <li><a href="https://www.youtube.com/watch?v=lCnRoMmzVCE&t=50s">Nothing But Luck</a></li>
      <li><a href="https://www.youtube.com/watch?v=EabkravC05k">FlatBall</a></li>
      <li><a href="https://github.com/JayZonday/reddit_app">GH - Wrote-it</a></li>
      <li><a href="https://www.youtube.com/watch?v=-Vzm-drYomk&t=23s">Recipe Hunter</a></li>
      </p>
      </div>
    )
  }
}

export default Info
