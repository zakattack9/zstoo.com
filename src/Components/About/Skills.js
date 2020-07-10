import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SKILL_LIST from './SkillList';
import './Skills.scss';

const Skills = (props) => {
  // const [animation, setAnimation] = useState(null);
  useEffect(() => {
    let skillsListAnimation = gsap.timeline({
      // scrollTrigger: {
      //   trigger: 
      // }
    });
    skillsListAnimation.from('.Skills__title', {
      duration: 0.8,
      ease: 'power1.inOut',
      opacity: 0,
      y: -20,
      skewX: -10,
    }, 0);
    skillsListAnimation.from('.Skills__skill', {
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
    skillsListAnimation.from('.Skills__subSkillsLine', {
      duration: 1,
      ease: 'power1.inOut',
      // opacity: 0.8,
      yPercent: -100,
    }, 1.2);
    // setAnimation(skillsListAnimation);
  }, []);

  // useEffect(() => {
  //   if (animation) {
  //     props.animate ? animation.play() : animation.reverse();
  //   }
  // }, [props.animate, animation]);
  
  const skills = (skillsArr) => {
    return Object.entries(skillsArr).map(([skill, subSkills], i) => {
      return (
        <div className="Skills__wrapper" key={i}>
          <div className="Skills__skill">{skill}</div>
          {subSkills.length > 0
            ? (<div className="Skills__subSkills">
                <div className="Skills__subSkillsLine"></div>
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
      <div className="Skills__section" key={i}>
        <div className="Skills__title">{section.title}</div>
        {skills(section.skills)}
      </div>
    );
  });

  return (
    <div className="Skills">
      {sections}
    </div>
  );
}

export default Skills;