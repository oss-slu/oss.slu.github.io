import React from 'react';

const developers = [
    {
        name: 'Raju Karmuri',
        githubUrl: "https://github.com/rkarmuri",
        imgSrc: "/img/raju_avatar.jpeg",
        altText: "Raju Karmuri - Individual Developer"
    },
    {
        name: "Chintak Joshi",
        githubUrl: "https://github.com/chintakjoshi",
        imgSrc: "/img/chintak_avatar1.JPG",
        altText: "Chintak Joshi - Individual Developer"     
    }
]

const IndDevs = () => {
  return (
    <div className="techLeadsGrid">
      {developers.map((dev, index) => {
        // Determine the image source, use GitHub profile picture if imgSrc is not provided
        const imgSrc = dev.imgSrc || `${dev.githubUrl}.png`;

        return (
          <div className="techLead" key={index}>
            <a href={dev.githubUrl} target="_blank" rel="noopener noreferrer">
              <img src={imgSrc} alt={dev.altText} className="teamLeadImage"/>
              <p>{dev.name}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default IndDevs;
