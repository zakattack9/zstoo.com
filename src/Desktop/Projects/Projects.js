import React, { useEffect, Fragment } from 'react';
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
    return <Fragment key={i}>
      <div className={`Projects__photo Projects__photo--${i + 1}`} id={`${i + 1}`} style={styles}></div>
      <div className={`Projects__info Projects__info--${i + 1}`}>
        {i % 2 === 1 ? projectsLine : projectsId}
        <div className="Projects__name">{project.name}</div>
        {i % 2 === 0 ? projectsLine : projectsId}
      </div>
    </Fragment>;
  });

  const projectHoverIn = (e) => {
    const id = e.target.id;
    console.log("IN", e.target.id)
    const darkenedStyles = {
      filter: 'brightness(0.5) grayscale(60%)'
    };

    if (+id === 1) {
      gsap.to(`.Projects__photo--1`, {
        y: -15,
      });
      gsap.to(`.Projects__photo--2`, {
        y: 25,
        ...darkenedStyles,
      });
      gsap.to(`.Projects__photo--3`, {
        y: 55,
        ...darkenedStyles,
      });
      gsap.to(`.Projects__photo--4`, {
        y: 40,
        ...darkenedStyles,
      });
      gsap.to(`.Projects__photo--5`, {
        y: 15,
        ...darkenedStyles,
      });
    } else if (+id === 2) {
      gsap.to(`.Projects__photo--1`, {
        y: -35,
        ...darkenedStyles,
      });
      gsap.to(`.Projects__photo--2`, {
        y: 15,
      });
      gsap.to(`.Projects__photo--3`, {
        y: -50,
        ...darkenedStyles,
      });
      gsap.to(`.Projects__photo--4`, {
        y: -30,
        ...darkenedStyles,
      });
      gsap.to(`.Projects__photo--5`, {
        y: -10,
        ...darkenedStyles,
      });
    } else if (+id === 3) {
      gsap.to(`.Projects__photo--1`, {
        y: 50,
        ...darkenedStyles,
      });
      gsap.to(`.Projects__photo--2`, {
        y: 30,
        ...darkenedStyles,
      });
      gsap.to(`.Projects__photo--3`, {
        y: -15,
      });
      gsap.to(`.Projects__photo--4`, {
        y: 60,
        ...darkenedStyles,
      });
      gsap.to(`.Projects__photo--5`, {
        y: 35,
        ...darkenedStyles,
      });
    } else if (+id === 4) {
      gsap.to(`.Projects__photo--1`, {
        y: -30,
        ...darkenedStyles,
      });
      gsap.to(`.Projects__photo--2`, {
        y: -10,
        ...darkenedStyles,
      });
      gsap.to(`.Projects__photo--3`, {
        y: -50,
        ...darkenedStyles,
      });
      gsap.to(`.Projects__photo--4`, {
        y: 15,
      });
      gsap.to(`.Projects__photo--5`, {
        y: -30,
        ...darkenedStyles,
      });
    } else if (+id === 5) {
      gsap.to(`.Projects__photo--1`, {
        y: 50,
        ...darkenedStyles,
      });
      gsap.to(`.Projects__photo--2`, {
        y: 30,
        ...darkenedStyles,
      });
      gsap.to(`.Projects__photo--3`, {
        y: 60,
        ...darkenedStyles,
      });
      gsap.to(`.Projects__photo--4`, {
        y: 40,
        ...darkenedStyles,
      });
      gsap.to(`.Projects__photo--5`, {
        y: -15,
      });
    }
  }

  const projectHoverOut = (e) => {
    console.log("OUT", e.target)
    const revertedStyles = {
      y: 0,
      filter: 'brightness(1) grayscale(0%)'
    };

    gsap.to(`.Projects__photo--1`, {
      ...revertedStyles,
    })
    gsap.to(`.Projects__photo--2`, {
      ...revertedStyles,
    })
    gsap.to(`.Projects__photo--3`, {
      ...revertedStyles,
    })
    gsap.to(`.Projects__photo--4`, {
      ...revertedStyles,
    })
    gsap.to(`.Projects__photo--5`, {
      ...revertedStyles,
    })
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