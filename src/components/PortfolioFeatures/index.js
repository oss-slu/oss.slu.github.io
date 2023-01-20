import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

import "./portfolioFeatures.css";

const projects = [
  {
    title: "Network Congestion-Control Emulator",
    github: "https://github.com/oss-slu/Congestion-control-emulator",
    pdf: "./annotated-page1.pdf",
  },
  {
    title: "Saltify",
    github: "https://github.com/oss-slu/SpeechTranscription",
    pdf: "./annotated-saltify.pdf",
  },
  {
    title: "Mouser",
    github: "https://github.com/oss-slu/Mouser",
    pdf: "./annotated-mouser.pdf",
  },
  {
    title: "Machine Learning Code Generator",
    github: "https://github.com/kate-holdener/ml_code_generator",
    pdf: "./annotated-machine-learning.pdf",
  },
  {
    title: "Swarm of Drones",
    github: "https://github.com/oss-slu/Drones",
    pdf: "./annotated-drones.pdf",
  },
  {
    title: "Pi4Micronaut",
    github: "https://github.com/oss-slu/Pi4Micronaut",
    pdf: "./annotated-Pi4MicronautFlyer.pdf",
  },
  {
    title: "Santiago",
    github: "https://github.com/oss-slu/Santiago",
    pdf: "./annotated-Flyer-1-2.pdf",
  },
  {
    title: "Scantron Software",
    github: "https://github.com/rkarmuri/Scantron_Software",
    pdf: "./annotated-scantron.pdf",
  },
  {
    title: "T-PEN",
    github: "https://github.com/CenterForDigitalHumanities/TPEN28/tree/oss-dev",
    pdf: "./annotated-conference-agen_60335056-1.pdf",
  },
  {
    title: "MeltShiny",
    github: "https://github.com/oss-slu/MeltWin2.0",
    pdf: "./annotated-Poster-1.pdf",
  },
];

const PortfolioFeatures = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState("");

  return (
    <div className="PortfolioFeaturesSection">
      <div className="ProjectsSection">
        <div className="cardsContainer">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flyer"
              onClick={() => {
                setSelectedPDF(project.pdf);
                setIsOpen(true);
              }}
            >
              <ProjectCard
                key={idx}
                title={project.title}
                github={project.github}
                pdf={project.pdf}
              />
            </div>
          ))}
        </div>
      </div>
      {!isOpen ? (
        <></>
      ) : (
        <div className="modal">
          <iframe
            src={require(`${selectedPDF}`).default}
            frameborder="0"
            allowFullScreen={true}
            className="fullSizePDF"
          />
          <label
            className="closeButton"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Close
          </label>
        </div>
      )}
    </div>
  );
};

export default PortfolioFeatures;
