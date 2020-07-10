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
      pin: true,
      pinSpacing: false,
      id: 'pin',
      // markers: true,
    });

    const aboutTimeline = gsap.timeline({ 
      scrollTrigger: {
        trigger: aboutRef.current,
        endTrigger: aboutTextRef.current,
        start: '-5% 0%',
        end: 'top 35%', // modify first % for duration of animation
        scrub: 1,
        // markers: true,
      }
    });
    aboutTimeline.from('.About__abstract--path', {
      duration: 1.3,
      ease: 'power2.inOut',
      strokeDashoffset: 800,
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
    }, 0.2);
    aboutTimeline.from('.About__glow', {
      duration: 1, 
      ease: 'power2.inOut',
      opacity: 0,
      scale: 0.84,
    }, 0.7);
    aboutTimeline.from('.About__hideSkim', {
      duration: 0.1,
      opacity: 0,
    }, 1);

    const skillsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: aboutTextRef.current,
        endTrigger: skillsTextRef.current,
        start: 'bottom 20%',
        end: 'top 20%',
        // toggleActions: 'play complete complete reverse',
        scrub: 1,
        id: 'skills-main',
        // markers: true,
      }
    });
    skillsTimeline.to('.About__glow', {
      duration: 0.5, 
      ease: 'power2.inOut',
      opacity: 0,
      scale: 0.84,
    }, 0);
    skillsTimeline.to('.About__abstract--path', {
      duration: 2,
      ease: 'power1.inOut',
      xPercent: 30,
      strokeDasharray: 800,
      strokeDashoffset: -100,
      stagger: {
        each: 0.1,
        from: 'end'
      }
    }, 0);
    skillsTimeline.to('.About__ZakSakata--path', {
      duration: 2.2,
      ease: 'power1.inOut',
      strokeDashoffset: 1540,
      stagger: {
        each: 0.05,
        from: 'end'
      }
    }, 0);
    skillsTimeline.to('.About__SkillsTitle--path', {
      duration: 2.1,
      ease: 'power2.inOut',
      strokeDashoffset: 0,
      stagger: {
        each: 0.03,
        from: 'end'
      }
    }, 0.5);
    
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
        After discovering coding two years ago, I've been determined to improve my skills every day as both a developer and UI/UX designer. I've had amazing experiences teaching coding to students, competing in hackathons, and collaborating with many other knowledgable individuals. I'm passionate, always ready for a challenge, and open to new experiences.
        <br/><br/>
        After discovering coding two years ago, I've been determined to improve my skills every day as both a developer and UI/UX designer. I've had amazing experiences teaching coding to students, competing in hackathons, and collaborating with many other knowledgable individuals. I'm passionate, always ready for a challenge, and open to new experiences.
      </div>
      <Spacer height={100} />
      <div className="About__text About__text--skills" ref={skillsTextRef}>
        <Skills />
      </div>
      <Spacer height={200} />
    </div>
  );
}

export default About;