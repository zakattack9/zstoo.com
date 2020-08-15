import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Glow from '../../Images/AboutGlow.png';
import { About as Abstract, ZakSakata, Skills as SkillsTitle } from '../../SVGs/SVG';
import Skills from './Skills';
import Spacer from '../Spacer';
import Skim from '../Skim/Skim';
import './About.scss';

const About = () => {
  const aboutRef = useRef(null);
  const pinRef = useRef(null);
  const artRef = useRef(null);
  const aboutTextRef = useRef(null);
  const skillsTextRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: pinRef.current,
      endTrigger: aboutRef.current,
      end: '140% 60%',
      pin: true,
      pinSpacing: false,
      id: 'pin',
      // markers: true,
    });

    const aboutTimeline = gsap.timeline({ 
      scrollTrigger: {
        trigger: aboutRef.current,
        endTrigger: aboutTextRef.current,
        start: '-15% 0%',
        end: 'top 35%',
        scrub: 1,
        // markers: true,
      }
    });
    aboutTimeline.from('.About__abstract--path', {
      duration: 1.9,
      ease: 'power2.inOut',
      strokeDashoffset: 1300,
      stagger: {
        each: 0.02,
        from: 'start'
      }
    }, 0);
    aboutTimeline.from('.About__ZakSakata--path', {
      duration: 1.3,
      ease: 'power1.inOut',
      strokeDashoffset: -1540,
      stagger: {
        each: 0.02,
        from: 'start'
      }
    }, 0.8);
    aboutTimeline.from('.About__glow', {
      duration: 1, 
      ease: 'power2.inOut',
      opacity: 0,
      scale: 0.84,
    }, 1.4);
    aboutTimeline.from('.About__hideSkim', {
      duration: 0.1,
      opacity: 0,
    }, 1.6);

    const skillsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: aboutTextRef.current,
        endTrigger: skillsTextRef.current,
        start: 'bottom 20%',
        end: 'top 20%',
        scrub: 1,
        id: 'skills',
        // markers: true,
      }
    });
    skillsTimeline.fromTo('.About__glow', 
    { filter: 'opacity(100%)' },
    {
      duration: 0.5, 
      ease: 'power2.inOut',
      filter: 'opacity(0%)',
      scale: 0.84,
    }, 0);
    skillsTimeline.fromTo('.About__abstract--path', {
      strokeDasharray: '1333 1333',
    }, {
      duration: 2,
      ease: 'power1.inOut',
      xPercent: 30,
      strokeDasharray: '800 800',
      strokeDashoffset: -100,
      stagger: {
        each: 0.1,
        from: 'end'
      }
    }, 0);
    skillsTimeline.to('.About__ZakSakata--path', {
      duration: 3,
      ease: 'power1.inOut',
      strokeDashoffset: 1540,
      stagger: {
        each: 0.05,
        from: 'end'
      }
    }, 0);
    skillsTimeline.to('.About__SkillsTitle--path', {
      duration: 3.1,
      ease: 'power2.inOut',
      strokeDashoffset: 0,
      stagger: {
        each: 0.03,
        from: 'end'
      }
    }, 0.5);

    const aboutTimelineOut = gsap.timeline({
      scrollTrigger: {
        trigger: '.Skills',
        endTrigger: aboutRef.current,
        start: 'bottom 70%',
        end: '140% 60%',
        scrub: 0.8,
        id: 'about-out',
        // markers: true,
      }
    });
    aboutTimelineOut.to('.About__SkillsTitle--path', {
      duration: 2.8,
      ease: 'power2.inOut',
      strokeDashoffset: 850,
      stagger: {
        each: 0.03,
        from: 'center'
      }
    }, 0.2);
    aboutTimelineOut.to('.About__abstract--path', {
      duration: 4,
      ease: 'power2.inOut',
      strokeDasharray: '1333 1333',
      strokeDashoffset: 1333,
      stagger: {
        each: 0.07,
        from: 'edges'
      }
    }, '<');
    aboutTimelineOut.to('.About__hideSkim', {
      duration: 0.5,
      opacity: 0,
    }, '>');
  }, []);

  return (
    <div className="About" ref={aboutRef}>
      <div className="About__pin" ref={pinRef}>
        <div className="About__wrapper">
          <ZakSakata className="About__ZakSakata" pathName="About__ZakSakata--path" />
          <SkillsTitle className="About__SkillsTitle" pathName="About__SkillsTitle--path" />
          <div className="About__SkimCover About__hideSkim"></div>
          <Skim className="About__Skim About__hideSkim" width={100} height={100} />
        </div>

        <div className="About__art" ref={artRef}>
          <Abstract className="About__abstract" pathName="About__abstract--path" />
          <img className="About__glow" src={Glow} alt="abstract glow art"/>
        </div>
      </div>
      <Spacer height={50} />
      <div className="About__text About__text--about" ref={aboutTextRef}>
      Hello I’m Zak, a driven web developer with four years of experience in development, serverless applications, project collaboration, and a keen devotion to continuously refining my skills. I’m knowledgeable in UI/UX design and digital media editing, always putting an emphasis on quality and building a seamless user experience.
      <br/><br/>
      During my first internship in high school, I worked part-time for <span className="About__text--about-DevLeague">DevLeague</span> as a teaching assistant educating students ranging from intermediate to high school levels on front-end web development while additionally creating projects for students to work on.
      <br/><br/>
      As a full-time college junior, I’m a two year intern at <span className="About__text--about-StateFarm">State Farm</span> working part-time during the school year and full-time in the summer. I’ve had the chance to float around various teams within the company working on a large scope of projects including vulnerability scanners, chatbots, and a substantial React application.
      <br/><br/>
      I’ve had the privilege to collaborate with many knowledgeable individuals and am always ready for a new challenge or opportunity.
      </div>
      <Spacer height={100} /> 
      <div className="About__text About__text--skills" ref={skillsTextRef}>
        <Skills />
      </div>
    </div>
  );
}

export default About;