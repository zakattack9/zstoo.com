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
        After discovering coding two years ago, I've been determined to improve my skills every day as both a developer and UI/UX designer. I've had amazing experiences teaching coding to students, competing in hackathons, and collaborating with many other knowledgable individuals. I'm passionate, always ready for a challenge, and open to new experiences.
        <br/><br/>
        After discovering coding two years ago, I've been determined to improve my skills every day as both a developer and UI/UX designer. I've had amazing experiences teaching coding to students, competing in hackathons, and collaborating with many other knowledgable individuals. I'm passionate, always ready for a challenge, and open to new experiences.
      </div>
      <Spacer height={100} /> 
      <div className="About__text About__text--skills" ref={skillsTextRef}>
        <Skills />
      </div>
    </div>
  );
}

export default About;