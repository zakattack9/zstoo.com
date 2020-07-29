import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Project as Abstract } from '../../SVGs/SVG';
import Skim from '../Skim/Skim';
import NavLink from '../NavLink/NavLink';
import PROJECT_DATA from '../../Data/ProjectData';
import './Project.scss';

const Project = props => {
  const { projectId = 1 } = props;
  const projectData = PROJECT_DATA.find(project => project.id === projectId);

  return (
    <div className="Project">
      <div className="Project__info">
        <div className="Project__techStack">
          <div className="Project__techStackText Project__techStackText--title" style={{color: projectData.color}}>
            {`Tech\nStack`}
          </div>
          {projectData.techStack.map((tech, i) => {
            return <div className="Project__techStackText--tech" key={i}>{tech}</div>
          })}
        </div>
        <NavLink className={"Project__NavLink--AllProjects"} text={`All\nProjects`} lineWidth={40} href='/' left />
        <NavLink className={"Project__NavLink--NextProject"} text={`Next\nProject`} lineWidth={60} />
      </div>

      <div className="Project__art">
        <Abstract className="Project__abstract" pathName="Project__abstract--path" />
      </div>
    </div>
  );
}

export default Project;