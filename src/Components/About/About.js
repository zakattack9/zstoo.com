import React, { useEffect } from 'react';
import { ScrollScene, addIndicators } from 'scrollscene';
import { gsap } from 'gsap';
import Glow from '../../Images/AboutGlow.png';
import { About as Abstract } from '../../SVGs/SVG';
import Spacer from '../Spacer';
import './About.scss';

const About = () => {
  useEffect(() => {
    const aboutTimeline = gsap.timeline({ paused: true });
    aboutTimeline.from('.About__abstract--path', {
      duration: 0.5,
      ease: 'power2.inOut',
      strokeDashoffset: 750,
      stagger: {
        each: 0.02,
        from: 'start'
      }
    }, 0);

    // aboutTimeline.from('.About__glow', {
    //   duration: 0.5, 
    //   ease: 'power2.inOut',
    //   opacity: 1,
    //   scale: 0.84,
    // }, 0.4);

    const aboutTrigger = document.querySelector('#About__trigger');
    const scrollScene = new ScrollScene({
      triggerElement: aboutTrigger,
      triggerHook: 0,
      gsap: { timeline: aboutTimeline },
      offset: -200,
      duration: 1000
    })
    scrollScene.Scene.setPin('.About__art');
    // scrollScene.Scene.addIndicators({ name: 'about scene', colorEnd: '#FFFFFF' })
  }, []);

  return (
    <div className="About">
      <div id="About__trigger"></div>
      <div className="About__art">
        <Abstract className="About__abstract" pathName="About__abstract--path" />
        {/* <img className="About__glow" src={Glow} alt="abstract glow art"/> */}
      </div>
    </div>
  );
}

export default About;