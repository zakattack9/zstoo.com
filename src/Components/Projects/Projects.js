import React from 'react';
import { ScrollScene, addIndicators } from 'scrollscene';
import { gsap } from 'gsap';
import Glow from '../../Images/ProjectsGlow.png';
import { Projects as Abstract } from '../../SVGs/SVG';
import PROJECT_DATA from './ProjectData';
import ProjectLink from './ProjectLink';
import './Projects.scss';

class Projects extends React.Component {
  componentDidMount () {

  }

  componentWillUnmount () {
    // clean up ScrollScene here
  }

  render () {
    return (
      <div className="Projects">
        <div className="Projects__art">
          <Abstract className="Projects__abstract" pathName="Projects__abstract--path" />
          <img className="Projects__glow" src={Glow} alt="abstract glow art"/>
        </div>
        <div className="Projects__wrapper">
          {PROJECT_DATA.map(project => {
            return <ProjectLink name={project.name} desc={project.shortDesc} id={project.id} />
          })}
        </div>
      </div>
    );
  }
}

export default Projects;