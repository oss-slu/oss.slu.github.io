import React from 'react';

function Profile({ imgSrc, name, profileLink, description }) {
  return (
    <div className="techLead">
      <a href={profileLink}>
        <img src={imgSrc} alt={name} className="teamLeadImage"/>
        <p>{name}</p>
      </a>
    </div>
  );
}

export default Profile;
