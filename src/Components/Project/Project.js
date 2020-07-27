import React from 'react';
import './Project.scss';
import NavLink from '../NavLink/NavLink';

const Project = props => {
  return (
    <div className="Project">
      <NavLink className={"NavLink--AllProjects"} text={`All\nProjects`} lineWidth={40} left />
      <NavLink className={"NavLink--NextProject"} text={`Next\nProject`} lineWidth={60} />
    </div>
  );
}

export default Project;