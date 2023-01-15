import React from "react";
import Layout from "@theme/Layout";
import ProjectCard from "../components/PortfolioFeatures/ProjectCard";

import "./portfolio.css";

const projects = [
  {
    title: "Congestion control emulator",
    github: "https://github.com/oss-slu/Congestion-control-emulator",
    flyer: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
  },
  {
    title: "Speech Transcription",
    github: "https://github.com/oss-slu/SpeechTranscription",
    flyer: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
  },
  {
    title: "Mouser",
    github: "https://github.com/oss-slu/Mouser",
    flyer: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
  },
  {
    title: "Seeing is Believing",
    github: "https://github.com/oss-slu/Seeing-is-Believing",
    flyer: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
  },
  {
    title: "Drones",
    github: "hhttps://github.com/oss-slu/Drones",
    flyer: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
  },
  {
    title: "Pi4Micronaut",
    github: "https://github.com/oss-slu/Pi4Micronaut",
    flyer: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
  },
  {
    title: "Santiago",
    github: "https://github.com/oss-slu/Santiago",
    flyer: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
  },
];

const Portfolio = () => (
  <Layout>
    <div className="ProjectsSection">
      <div className="cardsContainer">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            github={project.github}
            flyer={project.flyer}
          />
        ))}
      </div>
    </div>
  </Layout>
);

export default Portfolio;
