import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import {HiOutlineDocumentDownload} from "react-icons/hi"
import "../styles/Socials.css";
import { Tooltip } from "react-tooltip";
import myCV from "../assets/CVDavidWong.pdf"
const Socials = () => {
  return (
    <>
      <div className="socialMediaIcons">
      <Tooltip 
        id="github"
        content='My Github'
        />
        <a 
        data-tooltip-id="github"
        href="https://github.com/DWMi" target="_blank">
          <AiOutlineGithub />
        </a>
      <Tooltip 
        id="linkedin"
        content='My LinkedIN'
        />
        <a 
        data-tooltip-id="linkedin"
        href="https://www.linkedin.com/in/david-wong-a904a5237/">
          <AiOutlineLinkedin />
        </a>
      <Tooltip 
        id="Mail"
        content='Contact me via Email'
        />
        <a 
        data-tooltip-id="Mail"
        href="mailto:cf.davidwong@gmail.com">
          <AiOutlineMail />
        </a>
      <Tooltip 
        id="cv"
        content='Download my CV'
        />
        <a 
        data-tooltip-id="cv"
        href={myCV} download>
          <HiOutlineDocumentDownload />
        </a>
      </div>
    </>
  );
};

export default Socials;
