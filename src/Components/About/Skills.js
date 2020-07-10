import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SKILL_LIST from './SkillList';
import Spacer from '../Spacer';
import './Skills.scss';

const Skills = (props) => {
  const skillsRef = useRef(null);
  const pinRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: pinRef.current,
      endTrigger: skillsRef.current,
      start: 'top 28%',
      end: 'bottom 0%',
      pin: true,
      pinSpacing: false,
      // markers: true,
    });

    let skillsSection1 = gsap.timeline({
      scrollTrigger: {
        trigger: pinRef.current,
        start: 'top 28%',
        end: 'bottom 20%',
        toggleActions: 'play complete complete reverse',
        // scrub: 0.5,
        markers: true,
      }
    });
    skillsSection1.from('.Skills__section--1 .Skills__title', {
      duration: 0.8,
      ease: 'power1.inOut',
      opacity: 0,
      y: -20,
      skewX: -10,
    }, 0);
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
    }, 0.5);
    skillsSection1.addLabel('showSkills', '<');
    skillsSection1.from('.Skills__subSkillsLine--JavaScript', {
      duration: 0.9,
      ease: 'power1.inOut',
      yPercent: -100,
    }, 'showSkills+=0.1');
    skillsSection1.from('.Skills__subSkillsLine--CSS', {
      duration: 0.9,
      ease: 'power1.inOut',
      yPercent: -100,
    }, 'showSkills+=0.6');
    skillsSection1.from('.Skills__subSkillsLine--AWS', {
      duration: 0.9,
      ease: 'power1.inOut',
      yPercent: -100,
    }, 'showSkills+=0.9');

  }, []);
  
  const skills = (skillsArr) => {
    return Object.entries(skillsArr).map(([skill, subSkills], i) => {
      return (
        <div className="Skills__wrapper" key={i}>
          <div className="Skills__skill">{skill}</div>
          {subSkills.length > 0
            ? (<div className="Skills__subSkills">
                <div className={`Skills__subSkillsLine Skills__subSkillsLine--${skill}`}></div>
                {subSkills.map((subSkill, i) => {
                  return <div className="Skills__skill Skills__subSkill" key={i}>{subSkill}</div>
                })}
              </div>) 
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