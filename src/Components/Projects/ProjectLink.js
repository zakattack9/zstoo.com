import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './ProjectLink.scss';

// component used for adding scroll space into ScrollMagic scenes
const ProjectLink = props => {
  const [projectId, setProjectId] = useState(null);

  const projectClick = (id) => {
    props.projectClick(id);
    setProjectId(id);
  }

  // if (projectId) {
  //   return <Redirect push to={{
  //     pathname: "/project",
  //     state: { projectId } 
  //   }}/>
  // }

  return (
    <Link to={{
      pathname: "/project",
      state: { projectId: props.id } 
    }}>
      <div className="ProjectLink">
        <div className="ProjectLink__name">{props.name}</div>
        <div className="ProjectLink__shortDesc">{props.desc}</div>
        <div className={`ProjectLink__wrapper ProjectLink__wrapper--${props.index}`}>
          <div className="ProjectLink__line"></div>
          <div className="ProjectLink__id">{props.id}</div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectLink;