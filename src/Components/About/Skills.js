import React from 'react';
import SKILL_LIST from './SkillList';
import './Skills.scss';

const Skills = () => {
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