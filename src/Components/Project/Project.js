import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Project as Abstract, GitHub } from '../../SVGs/SVG';
import Skim from '../Skim/Skim';
import NavLink from '../NavLink/NavLink';
import PROJECT_DATA from '../../Data/ProjectData';
import './Project.scss';

const Project = props => {
  const { projectId = 1 } = props;
  const project = PROJECT_DATA.find(project => project.id === projectId);

  return (
    <div className="Project">
      <div className="Project__data">
        {/* TOP SECTION */}
        <NavLink className="Project__NavLink Project__NavLink--AllProjects" text={`All\nProjects`} lineWidth={25} href='/' left />
        
        {/* MIDDLE SECTION */}
        <div className="Project__title">{project.name}</div>
        <NavLink className="Project__NavLink Project__NavLink--NextProject" text={`Next\nProject`} lineWidth={15} />
        <div className="Project__id">0{project.id}</div>
       
        {/* GALLERY SECTION */}
        <Skim className="Project__Skim Project__Skim--gallery" type='toLeft' width={10} height={100} />
        <div className="Project__gallery">
          {project.imageUrls.map((imgUrl, i) => {
            return <img className="Project__photo" key={i} src={`${process.env.PUBLIC_URL}/${imgUrl}`} alt="sample project" />
          })}
        </div>
        
        {/* BOTTOM SECTION */}
        <Skim className="Project__Skim Project__Skim--art" type='project' width={85} height={100} />
        <GitHub className="Project__GitHub" pathName="Project__GitHub--path" />
        <div className="Project__info">
          <div className="Project__description">{project.fullDesc}</div>
          <div className="Project__details">
            <div className="Project__techStack">
              <div className="Project__detailsText Project__detailsText--title" style={{color: project.color}}>
                {`Tech\nStack`}
              </div>
              {project.techStack.map((tech, i) => {
                return <div className="Project__detailsText Project__detailsText--text" key={i}>{tech}</div>
              })}
            </div>
            <div className="Project__year">
              <div className="Project__detailsText Project__detailsText--title" style={{color: project.color}}>
                Year
              </div>
              <div className="Project__detailsText Project__detailsText--text">
                {project.year}
              </div>
            </div>
            <div className="Project__role">
              <div className="Project__detailsText Project__detailsText--title" style={{color: project.color}}>
                Role
              </div>
              <div className="Project__detailsText Project__detailsText--text">
                {project.role}
              </div>
            </div>
            <div className="Project__link">
              <div className="Project__linkText">Visit {project.name} &gt; </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Project__art">
        <Abstract className="Project__abstract" pathName="Project__abstract--path" />
      </div>
    </div>
  );
}

export default Project;