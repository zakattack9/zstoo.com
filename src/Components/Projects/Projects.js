import React from 'react';
import { ScrollScene, addIndicators } from 'scrollscene';
import { gsap } from 'gsap';
import Glow from '../../Images/ProjectsGlow.png';
import { Projects as Abstract } from '../../SVGs/SVG';
import PROJECT_DATA from './ProjectData';
import ProjectLink from './ProjectLink';
import Spacer from '../Spacer';
import './Projects.scss';

class Projects extends React.Component {
  componentDidMount () {
    const projectsTimeline = gsap.timeline({ paused: true });
    projectsTimeline.to('.Projects__abstract--path', {
      duration: 1.5,
      ease: 'power1.inOut',
      strokeDashoffset: 0,
      y: 350,
      stagger: {
        each: 0.03,
        from: 'start'
      }
    }, 0);

    projectsTimeline.to('.Projects__abstract--path', {
      duration: 0.5,
      ease: 'power1.inOut',
      strokeDashoffset: 740,
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

    const projectsTrigger = document.querySelector('#Projects__trigger');
    const scrollScene = new ScrollScene({
      triggerElement: projectsTrigger,
      triggerHook: 0,
      gsap: { timeline: projectsTimeline },
      duration: 2500
    })
    scrollScene.Scene.setPin('.Projects__art');
    // scrollScene.Scene.addIndicators({ name: 'projects scene', colorEnd: '#FFFFFF' })

    document.querySelectorAll('.ProjectLink').forEach((project, i) => {
      const projectLinkTrigger = document.querySelector('.ProjectLink__wrapper--' + i);
      const projectLinkLine = document.querySelector(`.ProjectLink__wrapper--${i} .ProjectLink__line`);
      new ScrollScene({
        triggerElement: projectLinkTrigger,
        triggerHook: 0.55,
        toggle: {
          element: projectLinkLine,
          className: 'slide--line'
        },
      })
      const projectLinkId = document.querySelector(`.ProjectLink__wrapper--${i} .ProjectLink__id`);
      new ScrollScene({
        triggerElement: projectLinkTrigger,
        triggerHook: 0.5,
        toggle: {
          element: projectLinkId,
          className: 'slide--id'
        },
      })
    })

  }

  componentWillUnmount () {
    // clean up ScrollScene here
  }

  render () {
    return (
      <div className="Projects">
        <div id="Projects__trigger"></div>
        <div className="Projects__art">
          <Abstract className="Projects__abstract" pathName="Projects__abstract--path" />
          {/* <img className="Projects__glow" src={Glow} alt="abstract glow art"/> */}
        </div>
        <Spacer height={150} />
        <div className="Projects__wrapper">
          {PROJECT_DATA.map((project, i) => {
            return <ProjectLink index={i} name={project.name} desc={project.shortDesc} id={project.id} />
          })}
        </div>
      </div>
    );
  }
}

export default Projects;