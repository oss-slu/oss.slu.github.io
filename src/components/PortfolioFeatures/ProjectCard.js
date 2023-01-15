import React from "react";

import "./projectCard.css";

const ProjectCard = ({ title, github, flyer }) => {
  return (
    <div className="cardContainer">
      <h3>{title}</h3>
      <img src={flyer} alt={title} />
      <a href={github} target="_blank">
        Github Page
      </a>
    </div>
  );
};

export default ProjectCard;
