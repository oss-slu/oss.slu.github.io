import React from 'react';

const resDevelopers = [
    {
      name: "Patrick Cuba",
      githubUrl: "https://github.com/cubap",
      imgSrc: "",
      altText: "Patrick Cuba - IT Architect",
      description: "Patrick Cuba is the IT Architect for RCG at SLU. His service is focused on consulting and project development, translating research questions into features, and helping to accelerate human-driven research. Specifically, he designs, develops, and implements technological solutions for use cases that escape typical vendor solutions, usually because of requirements for sustainability, openness, or customizable encoding. He has a passion for the record of human knowledge, especially supporting controversy, ambiguity, and attribution."
    },
    {
      name: "Bryan Haberberger",
      githubUrl: "https://github.com/thehabes",
      imgSrc: "",
      altText: "Bryan Haberberger - Full Stack Developer",
      description: "Bryan Haberberger is the Full Stack Developer for RCG at SLU. He works in the technology stacks behind various projects, and his focus shifts sprint by sprint. Simply put, he is a professional developer on campus and a resource for faculty, staff, students, and outside collaborators looking for software development expertise, especially in the realm of Web Applications. In recent years, he has accrued specialized skills with geospatial data on the web and is a member of the Open Geospatial Consortium, as well as an IIIF Maps TSG co-chair, as part of his commitment to open-source technologies."
    }
  ];

  const ResTechLeads = () => {
    return (
      <div className="ResLeads">
        {resDevelopers.map((dev, index) => {
          const imgSrc = dev.imgSrc || `${dev.githubUrl}.png`;
          return (
            <div key={index} className="resLead">
              <h2>{dev.name}</h2>
              <div className="resLead">
                <a href={dev.githubUrl} target="_blank" rel="noopener noreferrer">
                  <img src={imgSrc} alt={dev.altText} className="LeadImage" />
                </a>
              </div>
              <p>{dev.description}</p>
            </div>
          );
        })}
      </div>
    );
  }

export default ResTechLeads;
