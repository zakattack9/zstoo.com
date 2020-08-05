import React, { useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { Project as Abstract, GitHub, ProjectId } from '../../SVGs/SVG';
import ProjectGlow from '../ProjectGlow';
import Skim from '../Skim/Skim';
import NavLink from '../NavLink/NavLink';
import PROJECT_DATA from '../../Data/ProjectData';
import './Project.scss';

const Project = props => {
  const location = useLocation();
  const [project, setProject] = useState(null);
  const [projectLinkStyles, setProjectLinkStyles] = useState({});

  useEffect(() => {
    const { projectId } = location.state;
    const projectData = PROJECT_DATA.find(project => project.id === projectId);
    console.log("PROJECT DATA", projectData)
    setProject(projectData);
  }, [location]);
  
  useEffect(() => {
     if (project) {
       setProjectLinkStyles({
         color: project.colors.text,
         textShadow: `-1px 0px 5px ${project.colors.textShadow}`,
         border: `1px solid ${project.colors.border}`,
         boxShadow: `-1px 0px 8px ${project.colors.borderShadow}`,
       });
     }
  }, [project]);
  
  return project ? (
    <div className="Project">
      <div className="Project__data">
        {/* TOP SECTION */}
        <NavLink className="Project__NavLink Project__NavLink--AllProjects" text={`All\nProjects`} lineWidth={25} href='/' left />
        
        {/* MIDDLE SECTION */}
        <div className="Project__title">{project.name}</div>
        <NavLink className="Project__NavLink Project__NavLink--NextProject" text={`Next\nProject`} lineWidth={15} />
        <ProjectId className="Project__id" projectId={project.id} />
       
        {/* GALLERY SECTION */}
        <Skim className="Project__Skim Project__Skim--gallery" type='toLeft' width={10} height={100} />
        <div className="Project__gallery">
          {project.imageUrls.map((imgUrl, i) => {
            return <img className="Project__photo" key={i} src={`${process.env.PUBLIC_URL}/${imgUrl}`} alt="sample project" />
          })}
        </div>
        
        {/* BOTTOM SECTION */}
        <GitHub className="Project__GitHub" pathName="Project__GitHub--path" projectId={project.id} />
        <div className="Project__info">
          <div className="Project__description">{project.fullDesc}</div>
          <div className="Project__details">
            <div className="Project__techStack">
              <div className="Project__detailsText Project__detailsText--header" style={{color: project.colors.header}}>
                {`Tech\nStack`}
              </div>
              {project.techStack.map((tech, i) => {
                return <div className="Project__detailsText Project__detailsText--text" key={i}>{tech}</div>
              })}
            </div>
            <div className="Project__year">
              <div className="Project__detailsText Project__detailsText--header" style={{color: project.colors.header}}>
                Year
              </div>
              <div className="Project__detailsText Project__detailsText--text">
                {project.year}
              </div>
            </div>
            <div className="Project__role">
              <div className="Project__detailsText Project__detailsText--header" style={{color: project.colors.header}}>
                Role
              </div>
              <div className="Project__detailsText Project__detailsText--text">
                {project.role}
              </div>
            </div>
            <div className="Project__link">
              <div className="Project__linkText" style={projectLinkStyles}>Visit Project &gt; </div>
            </div>
          </div>
        </div>
        <Skim className="Project__Skim Project__Skim--art" type='project' width={85} height={100} />
      </div>

      <div className="Project__art">
        <Abstract className="Project__abstract" pathName="Project__abstract--path" projectId={project.id} />
        <ProjectGlow className="Project__glow" projectId={project.id} />
      </div>
    </div>
  ) : (<></>);
}

export default Project;