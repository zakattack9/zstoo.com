import React from 'react';
import './ProjectLink.scss';

// component used for adding scroll space into ScrollMagic scenes
const ProjectLink = props => {
  return (
    <div className="ProjectLink" onClick={() => props.projectClick(props.id)}>
      <div className="ProjectLink__name">{props.name}</div>
      <div className="ProjectLink__shortDesc">{props.desc}</div>
      <div className={`ProjectLink__wrapper ProjectLink__wrapper--${props.index}`}>
        <div className="ProjectLink__line"></div>
        <div className="ProjectLink__id">{props.id}</div>
      </div>
    </div>
  );
}

export default ProjectLink;