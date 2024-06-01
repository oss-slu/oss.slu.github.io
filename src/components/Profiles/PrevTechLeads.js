import React from 'react';

const prevDevelopers = [
    {
        name: 'Greih Murray',
        githubUrl: "https://github.com/GreihMurray",
        imgSrc: "/img/greih.jpg",
        altText: "Greih Murray - Previous Graduate Assistant Team Lead"
    },
    {
        name: 'Halima Malik',
        githubUrl: "https://github.com/HalimaMalik",
        imgSrc: "/img/halima.jpg",
        altText: "Halima Malik - Previous Graduate Assistant Team Lead"
    },
    {
        name: 'Omar Al Akkad',
        githubUrl: "https://github.com/OmarAlAkkad",
        imgSrc: "/img/Omar.jpg",
        altText: "Omar Al Akkad - Previous Graduate Assistant Team Lead"
    },
    {
        name: 'Uday Prasad Aitha',
        githubUrl: "https://github.com/aithaprasad",
        imgSrc: "/img/uday.jpg",
        altText: "Uday Prasad Aitha - Previous Graduate Assistant Team Lead"
    },
]

const PrevTechLeads = () => {
  return (
    <div className="techLeadsGrid">
        {prevDevelopers.map((dev,index)=> {
            const imgSrc = dev.imgSrc || `${dev.githubUrl}.png`;
        
            return (
                <div className="techLead" key={index}>
                    <a href={dev.githubUrl} target="_blank" rel="noopener noreferrer">
                        <img src={imgSrc} alt={dev.altText} className='techLeadImage'/>
                        <p>{dev.name}</p>
                    </a>
                </div>
            )
        })}
    </div>
  );
}

export default PrevTechLeads;
