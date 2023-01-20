import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/TextLayer.css";

import "./projectCard.css";

const ProjectCard = ({ title, github, pdf }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="cardContainer">
      <h3>{title}</h3>
      <div className="flyerContainer">
        <Document
          file={require(`${pdf}`).default}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={console.error}
        >
          <Page height={700} pageNumber={1} renderAnnotationLayer={false} />
        </Document>
      </div>
      {/*<iframe src={require(`${pdf}`).default}></iframe>*/}
      <a href={github} target="_blank">
        Github Page
      </a>
    </div>
  );
};

export default ProjectCard;
