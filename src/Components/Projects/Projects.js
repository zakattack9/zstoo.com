import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Glow from '../../Images/ProjectsGlow.png';
import { Projects as Abstract } from '../../SVGs/SVG';
import PROJECT_DATA from '../../Data/ProjectData';
import ProjectLink from './ProjectLink';
import Spacer from '../Spacer';
import Skim from '../Skim/Skim';
import './Projects.scss';

const Projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const projectsTimeline = gsap.timeline({ 
      scrollTrigger: {
        trigger: '.Projects__art',
        endTrigger: '.Projects', 
        end: 'bottom -50%',
        pin: true,
        scrub: 1,
        pinSpacing: false,
        // markers: true,
      }
    });
    projectsTimeline.to('.Projects__abstract--path', {
      duration: 1.5,
      ease: 'power1.inOut',
      strokeDashoffset: 0,
      y: 250,
      stagger: {
        each: 0.03,
        from: 'start'
      }
    }, 0);
    projectsTimeline.to('.Projects__abstract--path', {
      duration: 0.5,
      ease: 'power1.inOut',
      strokeDashoffset: 745,
      stagger: {
        each: 0.03,
        from: 'end'
      }
    }, 1.5);
    // projectsTimeline.from('.Projects__glow', {
    //   duration: 0.5, 
    //   ease: 'power2.inOut',
    //   opacity: 1,
    //   scale: 0.84,
    // }, 0.4);

    gsap.utils.toArray('.ProjectLink').forEach((project, i) => {
      gsap.from(project, {
        opacity: 0,
        y: 20,
        scale: 0.97,
        ease: 'power1.out',
        duration: 0.6,
        scrollTrigger: {
          trigger: project,
          toggleActions: 'play complete complete reverse',
          start: 'top 75%',
          id: 'wrapper',
          // markers: true,
        }
      });
      gsap.from(`.ProjectLink__wrapper--${i} .ProjectLink__line`, {
        opacity: 0,
        xPercent: -100,
        ease: 'power2.out',
        duration: 0.2,
        scrollTrigger: {
          trigger: project,
          toggleActions: 'play complete complete reverse',
          start: 'top 55%',
          id: 'line',
          // markers: true,
        }
      });
      gsap.from(`.ProjectLink__wrapper--${i} .ProjectLink__id`, {
        xPercent: -120,
        ease: 'power2.out',
        duration: 0.4,
        scrollTrigger: {
          trigger: project,
          toggleActions: 'play complete complete reverse',
          start: 'top 50%',
          id: 'id',
          // markers: true,
        }
      });
    });

    // gsap.from('.Projects__Skim', { 
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: '.Projects__Skim',
    //     toggleActions: 'play complete complete reverse',
    //     end: 'bottom -100%',
    //     pin: true,
    //     pinSpacing: false,
    //     markers: true,
    //   }
    // });
  }, []);

  return (
    <div className="Projects">
      <div className="Projects__art">
        <Abstract className="Projects__abstract" pathName="Projects__abstract--path" />
        {/* <img className="Projects__glow" src={Glow} alt="abstract glow art"/> */}
      </div>
      <Spacer height={140} />
      <div className="Projects__wrapper">
        {/* <Skim className="Projects__Skim" width={100} height={10} /> */}
        {PROJECT_DATA.map((project, i) => {
          return (
            <ProjectLink 
              index={i} 
              name={project.name} 
              desc={project.shortDesc} 
              id={project.id} 
              key={i} 
            />
        )})}
      </div>
    </div>
  );
}

export default Projects;