import React from "react";
import SkillBar from "./SkillBar"
import '../styles/aboutMe.css'
import proPic from "../assets/roundPic.png"

const AboutMe = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutMe">
        <h2 style={{margin:'20px',color:'white'}}><span style={{color:'rgb(108, 182, 250)', fontSize:'30px'}}>D</span>avid <span style={{color:'rgb(108, 182, 250)', fontSize:'30px'}}>W</span>ong</h2>
        <p className="aboutMeText">
        <img className="proPic" src={proPic}/>
        I'm born and raised in Örebro and I moved to Gothenburg in the beginning of 2019 to work here as a chef/cook and certain things happened and I decided to change my career to be a Web-developer. <br/>Right now I'm almost finished with my studies at Medieinstitutet as a Fullstack developer <em>("17th May is the graduation")</em>.  I'm living right now with my brother and my two cats Nikita and Mini. In my free time I like to go fishing by the lakes, or just being in the nature if the weather is nice, otherwise I'll just be indoors infront of my PC.
        
        </p>
      </div>
      <div className="skills">
        <SkillBar/>
      </div>
    </div>
  );
};

export default AboutMe;
