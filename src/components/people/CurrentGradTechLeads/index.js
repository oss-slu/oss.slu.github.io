import React from 'react';
import currentGradTechLeads from '../../../data/people/currentGradTechLeads.json';
import Profile from '../Profile';

function CurrentGradTechLeads() {
    console.log('curr', currentGradTechLeads)
  return (
      <div className="techLeadsGrid">
          {currentGradTechLeads.map((techLead, index) => (
              <Profile
              key={`current-grad-tech-lead-${index}`}
              imgSrc={techLead.image}
              name={techLead.name}
              profileLink={techLead.profileLink}
            />
          ))}
    </div>
  );
}

export default CurrentGradTechLeads;
