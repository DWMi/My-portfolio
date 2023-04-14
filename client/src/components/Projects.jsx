import React, { useState, useMemo } from "react";
import AliceCarousel from "react-alice-carousel";
import sad from "../assets/projects/SAD.webp";
import sneakers from "../assets/projects/Sneakerswebshop.png";
import techstore from "../assets/projects/techStorepic.png";
import qwerty from "../assets/projects/QWERTY.png";
import distort from "../assets/projects/DISTORT.png";
import optical from "../assets/projects/optical.png";
import { Tooltip } from "react-tooltip";
import ProjectModal from "./ProjectModal";
import "react-tooltip/dist/react-tooltip.css";
import "../styles/projects.css";
import "react-alice-carousel/lib/alice-carousel.css";
const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleDragStart = (e) => e.preventDefault();
  const [title, setTitle] = useState("SAD Active");
  const itemTitles = [
    "SAD Active",
    "Sneakers.",
    "TechStore",
    "Qwerty",
    "DISTORT",
    "Optical Trends",
  ];
  const [modalOpen, setModalOpen] = useState(false);

  const handleSlideChanged = (event) => {
    const currentIndex = event.item;
    const currentTitle = itemTitles[currentIndex];
    setTitle(currentTitle);
    setActiveIndex(currentIndex);
  };
  const handleThumbnailClick = (index) => {
    const currentTitle = itemTitles[index];
    setTitle(currentTitle);
    setActiveIndex(index);
  };
  const items = useMemo(
    () => [
      <img
        src={sad}
        onDragStart={handleDragStart}
        role="presentation"
        className="presentationImg"
        alt="SAD Active"
      />,
      <img
        src={sneakers}
        onDragStart={handleDragStart}
        role="presentation"
        className="presentationImg"
        alt="Sneakers."
      />,
      <img
        src={techstore}
        onDragStart={handleDragStart}
        role="presentation"
        className="presentationImg"
        alt="techstore"
      />,
      <img
        src={qwerty}
        onDragStart={handleDragStart}
        role="presentation"
        className="presentationImg"
        alt="qwerty"
      />,
      <img
        src={distort}
        onDragStart={handleDragStart}
        role="presentation"
        className="presentationImg"
        alt="Distort"
      />,
      <img
        src={optical}
        onDragStart={handleDragStart}
        role="presentation"
        className="presentationImg"
        alt="Optical Trends"
      />,
    ],
    []
  );

  const thumbnailItems = useMemo(
    () => [
      <img
        key={0}
        src={sad}
        onDragStart={handleDragStart}
        role="presentation"
        width={"10%"}
        alt="SAD Active"
        onClick={() => {
          handleThumbnailClick(0);
          setActiveIndex(0);
        }}
        className={activeIndex === 0 ? "activeThumbnail" : "notActiveThumbnail"}
      />,
      <img
        key={1}
        src={sneakers}
        onDragStart={handleDragStart}
        role="presentation"
        width={"10%"}
        alt="Sneakers."
        onClick={() => {
          handleThumbnailClick(1);
          setActiveIndex(1);
        }}
        className={activeIndex === 1 ? "activeThumbnail" : "notActiveThumbnail"}
      />,
      <img
        key={2}
        src={techstore}
        onDragStart={handleDragStart}
        role="presentation"
        width={"10%"}
        alt="techstore"
        onClick={() => {
          handleThumbnailClick(2);
          setActiveIndex(2);
        }}
        className={activeIndex === 2 ? "activeThumbnail" : "notActiveThumbnail"}
      />,
      <img
        key={3}
        src={qwerty}
        onDragStart={handleDragStart}
        role="presentation"
        width={"10%"}
        alt="qwerty"
        onClick={() => {
          handleThumbnailClick(3);
          setActiveIndex(3);
        }}
        className={activeIndex === 3 ? "activeThumbnail" : "notActiveThumbnail"}
      />,
      <img
        key={4}
        src={distort}
        onDragStart={handleDragStart}
        role="presentation"
        width={"10%"}
        alt="distort"
        onClick={() => {
          handleThumbnailClick(4);
          setActiveIndex(4);
        }}
        className={activeIndex === 4 ? "activeThumbnail" : "notActiveThumbnail"}
      />,
      <img
        key={5}
        src={optical}
        onDragStart={handleDragStart}
        role="presentation"
        width={"10%"}
        alt="Optical Trends"
        onClick={() => {
          handleThumbnailClick(5);
          setActiveIndex(5);
        }}
        className={activeIndex === 5 ? "activeThumbnail" : "notActiveThumbnail"}
      />,
    ],
    [activeIndex]
  );

  return (
    <div className="projectContainer">
      <Tooltip
        id="slideTitleText"
        content={`Click to see more about ${title}`}
      />
      {window.innerWidth <= 768 ? <div className="rotate-text">Click here <br/> ⬇️</div> : null}
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <h3
          className="slideTitle"
          data-tooltip-id="slideTitleText"
          onClick={() => setModalOpen(true)}
        >
          {title}
        </h3>
      </div>
      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={title}
      ></ProjectModal>
      <div className="carouselContainer">
        <AliceCarousel
          mouseTracking
          items={items}
          onSlideChanged={handleSlideChanged}
          activeIndex={activeIndex}
          disableDotsControls={true}
        />
      </div>
      <div className="thumbnailsContainer">{thumbnailItems}</div>
    </div>
  );
};

export default Projects;
