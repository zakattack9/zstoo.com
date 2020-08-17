import React from 'react';
import { ProjectId } from '../../SVGs/SVG';
import './ProjectLink.scss';

// component used for adding scroll space into ScrollMagic scenes
const ProjectLink = props => {
  return (
    <div className="ProjectLink" onClick={() => props.projectClick(props.id)}>
      <div className="ProjectLink__name">{props.name}</div>
      <div className="ProjectLink__shortDesc">{props.desc}</div>
      <div className={`ProjectLink__wrapper ProjectLink__wrapper--${props.index}`}>
        <div className="ProjectLink__line"></div>
        <ProjectId className="ProjectLink__id" projectId={props.id} noGradient />
      </div>
    </div>
  );
}

export default ProjectLink;