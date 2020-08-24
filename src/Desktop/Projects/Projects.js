import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Projects as Abstract } from '../../SVGs/SVG.desktop';
import { ProjectId } from '../../SVGs/SVG';
import PROJECT_DATA from '../../Data/ProjectData';
import './Projects.scss';

const Projects = () => {
  const projectData = PROJECT_DATA.map((project, i) => {
    const styles = { backgroundImage: `url(${process.env.PUBLIC_URL}/${project.imageUrls[0]})` };
    const projectsLine = <div className={`Projects__line Projects__line--${i + 1}`}></div>;
    const projectsId = <ProjectId className={`Projects__id Projects__id--${i + 1}`} projectId={`0${project.id}`} />;
    return <>
      <div className={`Projects__photo Projects__photo--${i + 1}`} id={`${i + 1}`} style={styles}></div>
      <div className={`Projects__info Projects__info--${i + 1}`} id={`${i + 1}`}>
        {i % 2 === 1 ? projectsLine : projectsId}
        <div className="Projects__name">{project.name}</div>
        {i % 2 === 0 ? projectsLine : projectsId}
      </div>
    </>;
  });

  const projectHoverIn = (e) => {
    console.log("IN", e.target)
  }

  const projectHoverOut = (e) => {
    console.log("OUT", e.target)
  }

  useEffect(() => {
    document.querySelectorAll('.Projects__photo').forEach(el => {
      el.addEventListener('mouseenter', (e) => {
        projectHoverIn(e);
      })

      el.addEventListener('mouseleave', (e) => {
        projectHoverOut(e);
      })
    });
    console.log(document.querySelectorAll('.Projects__photo'))
  }, []);

  return (
    <div className="Projects">
      <div className="Projects__art">
        <Abstract className="Projects__abstract" pathName="Projects__abstract--path" />
      </div>
      <div className="Projects__wrapper">
        {projectData}
      </div>
    </div>
  );
}

export default Projects;