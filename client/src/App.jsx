import "./App.css";
import React from "react";
import { Parallax } from "react-parallax";
import name from "/src/assets/Davidwong.png";
import hisingen from "/src/assets/hisingen.jpg";
import mistyWoods from "/src/assets/mistywoods.jpg";
import botanic from "/src/assets/botanic.jpg";
import Projects from "./components/Projects";
import Typewriter from "./components/Typewriter";
import Socials from "./components/Socials";
import AboutMe from "./components/AboutMe";
function App() {
  return (
    <div className="App">
      <Socials />
      <div className="content">
        <div className="introContent">
          <img className="name" src={name} alt="david wong" />
          <h1 className="pos">Fullstack Developer</h1>
        </div>
      </div>
      <Parallax
        strength={600}
        bgImage={hisingen}
        renderLayer={(percentage) => (
          <div className="contentImg">
            <Typewriter
              text={
                "Hey, I'm a Fullstack developer who leans towards Front End. I'm motivated, ambitious, and always looking to learn new things. Let's build something great together!"
              }
            /> 
          </div>
        )}
      ></Parallax>

      <div className="projectTitle">Here are some projects</div>
      <Parallax strength={800} bgImage={mistyWoods}>
        <div className="contentImg"></div>
      </Parallax>
      <Projects />
      <Parallax strength={400}>
        <div className="contentImg"></div>
      </Parallax>
      <Parallax strength={800} bgImage={botanic}
      renderLayer={(percentage) => (
          <div className="contentImg">
            <div
              className="aboutTitle"
              style={{ transform: `translateX(${-60 + percentage * 100}vw)` }}
            >
              ABOUT ME
            </div>
          </div>
        )}>
      </Parallax>
      <Parallax strength={400}>
        <div className="contentAbout">
            <AboutMe/>
        </div>
      </Parallax>
    </div>
  );
}

export default App;
