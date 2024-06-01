import React from 'react';

const leaders = [
  {
    name: "Daniel Shown",
    githubUrl: "https://github.com/kungfuchicken",
    imgSrc: "/img/daniel.jpg",
    altText: "Daniel Shown - Program Director",
    description: "Daniel Shown is the Program Director of the Open Source with SLU program. He handles the program's daily operations, builds connections with industry partners, works with internal and external clients of the program, and guides and supports our graduate students. Daniel's focus is to ensure that the program follows its mission of research support, commitment to open-source, and providing students with relevant software development experience."
  },
  {
    name: "Kate Holdener, Ph.D.",
    githubUrl: "https://github.com/kate-holdener",
    imgSrc: "/img/kate.png",
    altText: "Kate Holdener - Program Director",
    description: "Kate Holdener is an Assistant Professor of Computer Science at Saint Louis University. Her main focus in the department is on software engineering courses. She founded the open-source software program in an effort to engage more students in open-source development, as a way to give them practical experience during school."
  }
];

const Leaders = () => {
  return (
    <div className="ResLeads">
      {leaders.map((leader, index) => {
        const imgSrc = leader.imgSrc || `${leader.githubUrl}.png`;
        return (
          <div key={index} className="resLead">
            <h2>{leader.name}</h2>
            <div className="resLead">
              <a href={leader.githubUrl} target="_blank" rel="noopener noreferrer">
                <img src={imgSrc} alt={leader.altText} className="LeadImage" />
              </a>
            </div>
            <p>{leader.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Leaders;
