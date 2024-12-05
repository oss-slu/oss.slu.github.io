import React from 'react';
import prevGradTechLeads from '../../../data/people/prevGradTechLeads.json';
import Profile from '../Profile';

function PrevGradTechLeads() {

  return (
      <div className="techLeadsGrid">
          {prevGradTechLeads.map((techLead, index) => (
              <Profile
              key={`prev-grad-tech-lead-${index}`}
              imgSrc={techLead.image}
              name={techLead.name}
              profileLink={techLead.profileLink}
            />
          ))}
    </div>
  );
}

export default PrevGradTechLeads;
