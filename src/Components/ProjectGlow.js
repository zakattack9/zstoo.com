import React from 'react';
import Project1Glow from '../Images/Project1Glow.png';
import Project2Glow from '../Images/Project2Glow.png';
import Project3Glow from '../Images/Project3Glow.png';
import Project4Glow from '../Images/Project4Glow.png';
import Project5Glow from '../Images/Project5Glow.png';

const ProjectGlow = props => {
  const determineGlow = () => {
    switch(props.projectId) {
      case 1: return Project1Glow;
      case 2: return Project2Glow;
      case 3: return Project3Glow;
      case 4: return Project4Glow;
      case 5: return Project5Glow;
      default: return Project1Glow;
    }
  }

  return <img className={props.className} src={determineGlow()} alt="abstract project glow art"/>
}

export default ProjectGlow;