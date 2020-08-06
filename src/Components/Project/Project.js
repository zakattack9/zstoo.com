import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
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
    const projectId = location?.state?.projectId || 1;
    const projectData = PROJECT_DATA.find(projectObj => projectObj.id === projectId);
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

      const projectTimeline = gsap.timeline({});
      projectTimeline.fromTo('.Project__photo', {
        xPercent: 40,
        opacity: 0,
      },{
        duration: 1.5,
        ease: 'slow.out',
        xPercent: 0,
        opacity: 1,
        stagger: {
          each: 0.2,
          from: 'start'
        }
      }, 0);
      projectTimeline.fromTo('.Project__title', {
        opacity: 0,
        yPercent: 15,
      }, {
        duration: 1.6,
        ease: 'slow.inOut',
        opacity: 1,
        yPercent: 0,
      }, '<0.5');
      projectTimeline.fromTo('.Project__info', {
        opacity: 0,
        yPercent: -5,
      }, {
        duration: 1.4,
        ease: 'slow.inOut',
        opacity: 1,
        yPercent: 0,
      }, '<');
      projectTimeline.fromTo('.Project__abstract--path', {
        strokeDashoffset: 770,
      }, {
        duration: 2,
        ease: 'power1.out',
        strokeDashoffset: 0,
        stagger: {
          each: 0.02,
          from: 'end',
        }
      }, '>-1.5');
      projectTimeline.fromTo('.Project__GitHub--path', {
        strokeDashoffset: -395,
      }, {
        duration: 0.8,
        ease: 'power1.inOut',
        strokeDashoffset: 0,
      }, '<0.7');
      projectTimeline.fromTo('.Project__id', {
        opacity: 0,
        xPercent: -5,
      }, {
        duration: 1.5,
        ease: 'slow.inOut',
        opacity: 1,
        xPercent: 0,
      }, '<0.5');
      projectTimeline.fromTo('.Project__glow', {
        opacity: 0,
      }, {
        duration: 0.5,
        opacity: 1,
      }, '<0.3');
      projectTimeline.addLabel('NavLinkIn', '<0.2');
      projectTimeline.fromTo('.Project__NavLink--AllProjects', {
        opacity: 0,
        xPercent: -20,
      }, {
        duration: 1,
        ease: 'ease.inOut',
        opacity: 1,
        xPercent: 0,
      }, 'NavLinkIn');
      projectTimeline.fromTo('.Project__NavLink--NextProject', {
        opacity: 0,
        xPercent: 70,
      }, {
        duration: 1,
        ease: 'ease.inOut',
        opacity: 1,
        xPercent: 0,
      }, 'NavLinkIn');
    }
  }, [project]);

  const nextProject = () => {
    const nextProject = PROJECT_DATA.find(projectObj => projectObj.id === project.id + 1) || PROJECT_DATA[0];
    const animationComplete = () => {
      setProject(nextProject);
    }
    
    const projectTimelineOut = gsap.timeline({
      onComplete: animationComplete,
    });
    projectTimelineOut.to('.Project__NavLink--AllProjects', {
      duration: 1,
      ease: 'ease.inOut',
      opacity: 0,
      xPercent: -20,
    }, 0);
    projectTimelineOut.to('.Project__NavLink--NextProject', {
      duration: 1,
      ease: 'ease.inOut',
      opacity: 0,
      xPercent: 70,
    }, 0);
    projectTimelineOut.to('.Project__glow', {
      duration: 0.5,
      opacity: 0,
    }, 0);
    projectTimelineOut.to('.Project__abstract--path', {
      duration: 2,
      ease: 'power1.out',
      strokeDashoffset: -770,
      stagger: {
        each: 0.02,
        from: 'start',
      }
    }, '<0.5');
    projectTimelineOut.to('.Project__GitHub--path', {
      duration: 0.8,
      ease: 'power1.inOut',
      strokeDashoffset: 395,
    }, '<0.2');
    projectTimelineOut.to('.Project__id', {
      duration: 1.5,
      ease: 'slow.inOut',
      opacity: 0,
      xPercent: -5,
    }, '<0.1');
    projectTimelineOut.to('.Project__photo', {
      duration: 1.3,
      ease: 'power1.inOut',
      xPercent: 50,
      opacity: 0,
      stagger: {
        each: 0.2,
        from: 'end'
      }
    }, '<0.3');
    projectTimelineOut.to('.Project__title', {
      duration: 1,
      ease: 'power1.inOut',
      opacity: 0,
      yPercent: 15,
    }, '<0.1');
    projectTimelineOut.to('.Project__info', {
      duration: 0.8,
      ease: 'power1.inOut',
      opacity: 0,
      yPercent: -5,
    }, '<');
  }
  
  return project ? (
    <div className="Project">
      <div className="Project__data">
        {/* TOP SECTION */}
        <NavLink className="Project__NavLink Project__NavLink--AllProjects" text={`All\nProjects`} lineWidth={25} href='/' left />
        
        {/* MIDDLE SECTION */}
        <div className="Project__title">{project.name}</div>
        <NavLink className="Project__NavLink Project__NavLink--NextProject" text={`Next\nProject`} lineWidth={15} onClick={nextProject} />
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