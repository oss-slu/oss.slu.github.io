import React from 'react';

function Profile({ imgSrc, name, profileLink, description }) {
  const githubUsername = profileLink.split('/').pop();
  const githubImgSrc = `https://github.com/${githubUsername}.png`;

  return (
    <div className="techLead">
      <a href={profileLink}>
        <img src={imgSrc || githubImgSrc} alt={name} className="teamLeadImage"/>
        <p>{name}</p>
      </a>
    </div>
  );
}

export default Profile;
