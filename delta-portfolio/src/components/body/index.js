import React from 'react';
import Headshot from '../../images/porchheadshot.jpeg';
function Body() {
  return (
    <div className = "body">
      <h1>SFPOPOS</h1>
      <div className = "page-wrapper">
          <div className="page-section" id="about">
          <img src={Headshot} alt="myself"/>
          <h2>About me</h2>
          <p>I'm William Joseph Woodall, your friendly neighborhood web developer. I've always had an interest in technology and now I'm making it my living. 
          What I lack in experience I compensate for with tenacity and a willingness to learn and experiment.</p>
          <p>I'm your typically nerdy guy, I play DnD on the weekends, I collect and paint Warhammer miniatures, and I'm always buried in a book. 
          My interests range from ancient history, to mythology, to orbital mechanincs and hard science fiction, not to mention the culinary arts.
          I am constatnly trying to cook and try new recipes, and I've had the good fortune to travel a lot in my life.</p>
          </div>
          <a href="assets/williamresume.pdf">Download Resume</a>
      </div>
    </div>
  );
}

export default Body