import React, { useEffect, useRef, Fragment } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Projects as Abstract, Project1, Project2, Project3, Project4, Project5 } from '../../SVGs/SVG.desktop';
import { ProjectId } from '../../SVGs/SVG';
import Spacer from '../../Components/Spacer';
import PROJECT_DATA from '../../Data/ProjectData';
import './Projects.scss';

// generates distances for project slices to move based on hovered project
const generateDistanceMap = (directionMap) => {
  const DISTANCE_INTERVAL = 15; // change for animation distance 
  
  const length = directionMap.length;
  const centerIndex = Math.floor(length / 2);

  return directionMap.map((direction, i) => {
    const distanceArr = new Array(length);
    let distance = direction * DISTANCE_INTERVAL;
    distanceArr[i] = distance;
    
    const numLoops = centerIndex + Math.abs(i - centerIndex);
    for (let j = 1; j <= numLoops; j++) {
      const extraDistance = j === 1 ? 10 : 0; // for more fluid animation
      if (direction < 0) distance += DISTANCE_INTERVAL * 2 + extraDistance;
      else distance -= DISTANCE_INTERVAL * 2 + extraDistance;

      if (i + j < length) distanceArr[i + j] = distance; 
      if (i - j >= 0) distanceArr[i - j] = distance;
    }
    return distanceArr;
  });
}
const DIRECTION_MAP = [...new Array(PROJECT_DATA.length)].map((v, i) => i % 2 === 0 ? -1 : 1);
const DISTANCE_MAP = [0, ...generateDistanceMap(DIRECTION_MAP)]; // index 1 based since IDs start at 1
const STROKE_DASH_OFFSET_MAP = [2735, 5150, 2680, 2440, 2760];

const Projects = () => {
  const projectsRef = useRef();
  const pinRef = useRef();
  const inEndRef = useRef();
  const outStateRef = useRef();

  const projectHoverIn = (e) => {
    const id = +e.target.id;
    const photoStyles = {
      filter: 'brightness(0.45) grayscale(70%)',
    };
    const infoStyles = {
      opacity: 0,
    };
    
    DISTANCE_MAP[id].forEach((distance, i) => {
      if (id === i + 1) {
        gsap.to(`.Projects__photo--${i + 1}`, {
          y: distance,
        });
        gsap.to(`.Projects__info--${i + 1}`, {
          y: -distance,
          scale: 1.1,
        });
      } else {
        gsap.to(`.Projects__photo--${i + 1}`, {
          y: distance,
          ...photoStyles,
        });
        gsap.to(`.Projects__info--${i + 1}`, {
          y: distance,
          ...infoStyles,
        });
      }
    });
    
    gsap.to(`.Projects__projectAbstract--${id}--path`, {
      duration: 1,
      ease: 'power1.inOut',
      strokeDashoffset: 0,
      opacity: 1,
    });

    gsap.to(`.Projects__id--${id}`, {
      duration: 0.5,
      delay: 0.3,
      opacity: 1,
      x: -5,
    });

    gsap.to(`.Projects__abstract--path`, {
      duration: 1,
      strokeDashoffset: -1850,
      opacity: 0,
    });
  }

  const projectHoverOut = (e) => {
    const revertedStyles = {
      y: 0,
      filter: 'brightness(1) grayscale(0%)',
      scale: 1,
      opacity: 1,
    };

    for (let i = 1; i <= PROJECT_DATA.length; i++) {
      gsap.to(`.Projects__photo--${i}`, {
        ...revertedStyles,
      });
      gsap.to(`.Projects__info--${i}`, {
        ...revertedStyles,
      });
      gsap.to(`.Projects__id--${i}`, {
        duration: 0.5,
        delay: 0.3,
        opacity: 0,
        x: 0,
      });
    }

    STROKE_DASH_OFFSET_MAP.forEach((offset, i) => {
      gsap.to(`.Projects__projectAbstract--${i + 1}--path`, {
        duration: 1,
        ease: 'power1.inOut',
        strokeDashoffset: offset,
        opacity: 0,
      });
    });

    gsap.to(`.Projects__abstract--path`, {
      duration: 1,
      strokeDashoffset: 0,
      opacity: 1,
    });
  }

  useEffect(() => {
    document.querySelectorAll('.Projects__photo').forEach(el => {
      el.addEventListener('mouseenter', (e) => projectHoverIn(e));
      el.addEventListener('mouseleave', (e) => projectHoverOut(e));
    });

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: pinRef.current,
      endTrigger: projectsRef.current,
      pin: true,
      pinSpacing: false,
      id: 'pin',
      // markers: true,
    });

    const projectsTimelineIn = gsap.timeline({
      scrollTrigger: {
        trigger: projectsRef.current,
        endTrigger: inEndRef.current,
        start: 'top 0%',
        scrub: 1,
        id: 'projectsIn',
        markers: true,
      }
    });
    projectsTimelineIn.fromTo('.Projects__abstract--path', {
      strokeDashoffset: 1850,
    }, {
      duration: 0.5,
      ease: 'power1.inOut',
      strokeDashoffset: 0,
      stagger: {
        each: 0.05,
        from: 'end'
      }
    }, 0);
    projectsTimelineIn.addLabel('projects', '<0.5');

    DIRECTION_MAP.forEach((direction, i) => {
      const photoIn = gsap.fromTo(`.Projects__photo--${i + 1}`, {
        yPercent: direction * -15,
        opacity: 0,
      }, {
        duration: 1,
        ease: 'power1.inOut',
        yPercent: 0,
        opacity: 1,
        pointerEvents: 'none',
      });
      projectsTimelineIn.add(photoIn, 'projects');

      const infoIn = gsap.fromTo(`.Projects__info--${i + 1}`, {
        yPercent: direction * -50,
        opacity: 0,
      }, {
        duration: 1,
        delay: 0.4,
        ease: 'power2.inOut',
        yPercent: 0,
        opacity: 1,
      });
      projectsTimelineIn.add(infoIn, 'projects');

      const photoFinish = gsap.to(`.Projects__photo--${i + 1}`, {
        duration: 0,
        pointerEvents: 'auto',
      });
      projectsTimelineIn.add(photoFinish, '>');
    });

  }, []);

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

  return (
    <div className="Projects" ref={projectsRef}>
      <div className="Projects__pin" ref={pinRef}>
        <div className="Projects__art">
          <Abstract className="Projects__abstract" pathName="Projects__abstract--path" />
          <Project1 className="Projects__projectAbstract Projects__projectAbstract--1" pathName="Projects__projectAbstract--1--path" />
          <Project2 className="Projects__projectAbstract Projects__projectAbstract--2" pathName="Projects__projectAbstract--2--path" />
          <Project3 className="Projects__projectAbstract Projects__projectAbstract--3" pathName="Projects__projectAbstract--3--path" />
          <Project4 className="Projects__projectAbstract Projects__projectAbstract--4" pathName="Projects__projectAbstract--4--path" />
          <Project5 className="Projects__projectAbstract Projects__projectAbstract--5" pathName="Projects__projectAbstract--5--path" />
        </div>
        <div className="Projects__wrapper">
          {projectData}
        </div>
      </div>
      <Spacer height={60} />
      <span id="Projects__trigger--inEnd" ref={inEndRef}></span>
      <Spacer height={50} /> {/* space to buffer scrolling before animating out */}
      <span id="Projects__trigger--outStart" ref={outStateRef}></span>
      <Spacer height={100} />
    </div>
  );
}

export default Projects;