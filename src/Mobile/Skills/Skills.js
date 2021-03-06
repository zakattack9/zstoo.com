import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SKILL_LIST from '../../Data/SkillList';
import Spacer from '../../Components/Spacer';
import './Skills.scss';

const Skills = (props) => {
  const skillsRef = useRef(null);
  const pinRef = useRef(null);
  
  const calcPinStart = () => {
    const aboutWrapper = document.querySelector('.About__wrapper');
    const aboutWrapperHeight = aboutWrapper ? aboutWrapper.clientHeight : '25%';
    return `top ${aboutWrapperHeight}`;
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: pinRef.current,
      endTrigger: skillsRef.current,
      start: calcPinStart,
      end: 'bottom 0%',
      pin: true,
      pinSpacing: false,
      id: 'skills-pin',
      // markers: true,
    });

    const skillsSection1 = gsap.timeline({});
    skillsSection1.from('.Skills__section--1 .Skills__title', {
      duration: 0.8,
      ease: 'power1.inOut',
      opacity: 0,
      y: -20,
      skewX: -10,
    }, '<');
    skillsSection1.from('.Skills__section--1 .Skills__skill', {
      duration: 0.4,
      ease: 'power1.inOut',
      opacity: 0,
      x: -10,
      skewX: -20,
      stagger: {
        each: 0.08,
        from: 'start',
      }
    }, '<0.5');
    skillsSection1.addLabel('showSkills', '<');
    skillsSection1.from('.Skills__subSkillsLine--JavaScript', {
      duration: 0.9,
      ease: 'power1.inOut',
      yPercent: -100,
    }, 'showSkills+=0.1');
    skillsSection1.from('.Skills__subSkillsLine--CSS', {
      duration: 0.7,
      ease: 'power1.inOut',
      yPercent: -100,
    }, 'showSkills+=0.7');
    skillsSection1.from('.Skills__subSkillsLine--AWS', {
      duration: 0.7,
      ease: 'power1.inOut',
      yPercent: -100,
    }, 'showSkills+=0.9');

    const skillsSection1to2 = gsap.timeline({});
    skillsSection1to2.to('.Skills__section--1', {
      duration: 1.2,
      ease: 'power1.inOut',
      yPercent: -60,
    }, 0);
    skillsSection1to2.to('.Skills__section--1', {
      duration: 0.7,
      ease: 'power1.inOut',
      scale: 0.97,
      transformOrigin: 'center left',
      opacity: 0.5,
    }, '>');
    skillsSection1to2.to('.Skills__section--2', {
      duration: 0.7,
      ease: 'power1.inOut',
      yPercent: -225,
    }, '<');

    const skillsSection2 = gsap.timeline({});
    skillsSection2.from('.Skills__section--2 .Skills__title', {
      duration: 0.8,
      ease: 'power1.inOut',
      opacity: 0,
      y: -20,
      skewX: -10,
    }, '>');
    skillsSection2.from('.Skills__section--2 .Skills__skill', {
      duration: 0.4,
      ease: 'power1.inOut',
      opacity: 0,
      x: -10,
      skewX: -20,
      stagger: {
        each: 0.08,
        from: 'start',
      }
    }, '<0.5');

    const skillsSectionOut = gsap.timeline({});;
    skillsSectionOut.to('.Skills__subSkillsLine', {
      duration: 0.9,
      ease: 'power1.inOut',
      yPercent: -100,
      scale: 0.95,
      opacity: 0,
    }, 0.2);
    skillsSectionOut.to('.Skills__skill', {
      duration: 0.8,
      ease: 'power1.inOut',
      x: -10,
      opacity: 0,
      skewX: -20,
      stagger: {
        each: 0.08,
        from: 'center',
      }
    }, 0.5);
    skillsSectionOut.to('.Skills__title', {
      duration: 0.8,
      ease: 'power1.inOut',
      x: -10,
      opacity: 0,
      skewX: -20,
      stagger: {
        each: 0.08,
        from: 'center',
      }
    }, 1.4);

    const skillsSectionMain = gsap.timeline({
      scrollTrigger: {
        trigger: skillsRef.current,
        start: 'top 26%',
        end: 'bottom 50%',
        scrub: 1,
        // markers: true,
      }
    });
    skillsSectionMain.add(skillsSection1, '>0.5');
    skillsSectionMain.add(skillsSection1to2, '>0.7');
    skillsSectionMain.add(skillsSection2, '>-0.2');
    skillsSectionMain.add(skillsSectionOut, '>1');
  }, []);
  
  const skills = (skillsArr) => {
    return Object.entries(skillsArr).map(([skill, subSkills], i) => {
      return (
        <div className="Skills__wrapper" key={i}>
          <div className="Skills__skill">{skill}</div>
          {subSkills.length > 0
            ? <div className="Skills__subSkills">
                <div className={`Skills__subSkillsLine Skills__subSkillsLine--${skill}`}></div>
                {subSkills.map((subSkill, i) => {
                  return <div className="Skills__skill Skills__subSkill" key={i}>{subSkill}</div>
                })}
              </div> 
            : null
          }
        </div>
      );
    });
  }

  const sections = SKILL_LIST.map((section, i) => {
    return(
      <div className={`Skills__section Skills__section--${i + 1}`} key={i}>
        <div className="Skills__title">{section.title}</div>
        {skills(section.skills)}
      </div>
    );
  });

  return (
    <div className="Skills" ref={skillsRef}>
      <div className="Skills__pin" ref={pinRef}>
        {sections}
      </div>
      <Spacer height={100} />
    </div>
  );
}

export default Skills;