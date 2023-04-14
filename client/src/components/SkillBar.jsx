import React from "react";
import "../styles/SkillBar.css";

const SkillBar = ({ name, level }) => {
  return (
    <div className="skillBar">
      <div className="skillName">{name}</div>
      <div className="skillLevel">
        <div className="skillLevelBar" style={{ width: `${level}%` }}>
          {level}%
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
    { name: "SASS", level: 70 },
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 50 },
    { name: "ReactJs", level: 80 },
    { name: "NextJs", level: 70 },
  ];
  const skills2 = [
    { name: "MongoDB", level: 60 },
    { name: "PHP", level: 50 },
    { name: "WordPress", level: 60 },
    { name: "MySQL", level: 70 },
    { name: "MSSQL", level: 70 },
    { name: "NodeJS", level: 60 },
    { name: "ExpressJS", level: 60 },
    { name: "Github", level: 70 },
  ];

  return (
    <div className="skillsContainer">
    <h1 style={{color:'white'}}><span style={{color:'rgb(108, 182, 250)'}}>S</span>kills</h1>
    <div className="skillsContainer2">

      <div className="skillsInnerContainer1">
        {skills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
      <div className="skillsInnerContainer2">
        {skills2.map((skill2) => (
          <SkillBar key={skill2.name} name={skill2.name} level={skill2.level} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Skills;
