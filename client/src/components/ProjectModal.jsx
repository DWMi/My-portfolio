import React from "react";
import "../styles/ProjectModal.css";
import { Tooltip } from "react-tooltip";

import sad from "../assets/projects/SAD.webp";
import sneakers from "../assets/projects/Sneakerswebshop.png";
import techstore from "../assets/projects/techStorepic.png";
import qwerty from "../assets/projects/QWERTY.png";
import distort from "../assets/projects/DISTORT.png";
import optical from "../assets/projects/optical.png";
const projectTexts = [
  {
    title: "SAD Active",
    description:
      "Sad Active is an E-commerce built on WordPress using Woocommerce and uses MySql and PhpMyAdmin as a Database.",
    stacks: ["JavaScript", "PHP", "MySQL", "WordPress", "Woocommerce", "CSS"],
    image:`${sad}`,
    link: "https://github.com/DWMi/Wordpress---Webshop",
  },
  {
    title: "Sneakers.",
    description:
      "Sneakers is an E-commerce built on Vanilla JS and PHP in the backend and PhpMyAdmin as Database to learn class orientation.",
    stacks: ["JavaScript", "PHP", "HTML", "CSS", "MySQL"],
    image: `${sneakers}`,
    link: "https://github.com/DWMi/Projektarbete-Webbshop",
  },
  {
    title: "TechStore",
    description:
      "TechStore is a tech E-commerce built on ReactJS with Stripe implemented to learn how to implement Stripe and all products are stored in Stripe.",
    stacks: ["JavaScript", "HTML", "CSS", "Stripe", "nodeJS"],
    image: `${techstore}`,
    link: "https://github.com/DWMi/Techstore-Stripe-edition",
  },
  {
    title: "Qwerty",
    description:
      "Qwert-Keyboards is an E-commerce selling Custom build Mechanical Keyboards. This was my Exam Project which was built in NextJS and MongoDB. This project is Deployed using Vercel where you can visit",
    stacks: ["JavaScript", "NextJS", "MongoDB", "CSS"],
    image: `${qwerty}`,
    link: "https://github.com/DWMi/QWERTY-exam",
    link2: "https://qwertykeyboards.vercel.app/",
  },
  {
    title: "DISTORT",
    description:
      "DISTORT is a chat-app built using Socket.io in Nodejs and Express server. It's also using 2 different API's(Giphy, Emoji-api), in purpose of having the / short-command like Discord.",
    stacks: ["JavaScript", "CSS", "Express", "nodeJS", "Socket.io"],
    image: `${distort}`,
    link: "https://github.com/DWMi/Distort",
  },
  {
    title: "Optical Trends",
    description:
      "Optical Trends is an E-commerce selling sunglasses and it was built using ReactJS and TypeScript where the products are saved in LocalStorage. In this project we practiced usinc CRUD,typeScript and React",
    stacks: ["TypeScript", "React", "MaterialUI"],
    image: `${optical}`,
    link: "https://github.com/DWMi/React-Store",
  },
];

const ProjectModal = ({ isOpen, onClose, title, windowWidth }) => {
  const project = projectTexts.find((project) => project.title === title);
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modalOverlay">
        <div className="modalContent">
          <div className="buttonContainer">
            <button className="modalClose" onClick={onClose}>
              X
            </button>
          </div>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href={project.link}
            target="_blank"
          >
            <h1
              className="detailsGithublink"
              data-tooltip-id="detailGithublink"
            >
              {title}
            </h1>
          </a>
          <div className="stacks">
            {project.stacks.map((stack) => (
              <span className="stack" key={stack}>
                {stack}
              </span>
            ))}
          </div>
          <div className="middleStuff">
            <Tooltip
              id="detailGithublink"
              content={`Click to see the Github repo of ${title}`}
            />
            {windowWidth <= 768 ? (
              <div className="rotate-text">
                Click here to see repo
                <br /> ⬇️
              </div>
            ) : null}
            <a
              style={{ color: "white", textDecoration: "none" }}
              href={project.link}
              target="_blank"
            >
              <img
                className="detailsImg"
                data-tooltip-id="detailGithublink"
                src={project.image}
                alt={project.title}
              />
            </a>
            <p className="projectDetails">{project.description}</p>
            {project.link2 && (
              <a
                style={{ textDecoration: "none" }}
                href={project.link2}
                target="_blank"
                className="projectDetails"
              >
                <b
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    padding: "2px",
                    margin: "5px",
                  }}
                >{`👉Here👈`}</b>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
