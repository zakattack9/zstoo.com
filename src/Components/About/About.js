import React, { useEffect } from 'react';
import { ScrollScene, addIndicators } from 'scrollscene';
import { gsap } from 'gsap';
import Glow from '../../Images/AboutGlow.png';
import { About as Abstract, ZakSakata } from '../../SVGs/SVG';
import Spacer from '../Spacer';
import Skim from '../Skim/Skim';
import './About.scss';

const About = () => {
  useEffect(() => {
    const aboutTimeline = gsap.timeline({ paused: true });
    aboutTimeline.from('.About__abstract--path', {
      duration: 1.3,
      ease: 'power2.inOut',
      strokeDashoffset: 880,
      stagger: {
        each: 0.02,
        from: 'start'
      }
    }, 0);

    aboutTimeline.from('.About__ZakSakata--path', {
      duration: 1,
      ease: 'power1.inOut',
      strokeDashoffset: -1540,
      stagger: {
        each: 0.02,
        from: 'start'
      }
    }, 0.4);

    aboutTimeline.from('.About__glow', {
      duration: 1, 
      ease: 'power2.inOut',
      opacity: 0,
      scale: 0.84,
      delay: 0.3,
    }, 0.4);

    aboutTimeline.from('.About__hideSkim', {
      duration: 0.1,
      opacity: 0,
      delay: 1,
    }, 0);

    // const aboutTrigger = document.querySelector('#About__trigger');
    // const scrollScene = new ScrollScene({
    //   triggerElement: aboutTrigger,
    //   triggerHook: 0,
    //   gsap: { timeline: aboutTimeline },
    //   offset: -70,
    //   duration: 1000
    // })
    // // scrollScene.Scene.addIndicators({ name: 'about scene', colorEnd: '#FFFFFF' });

    // const pinScrollScene = new ScrollScene({
    //   triggerElement: aboutTrigger,
    //   triggerHook: 0,
    //   offset: -70,
    //   duration: 2000
    // })
    // pinScrollScene.Scene.setPin('.About__art');
    // pinScrollScene.Scene.addIndicators({ name: 'about pin scene', colorEnd: '#FFFFFF' });

    return () => {
      // scrollScene.destroy();
      // pinScrollScene.destroy();
    }
  }, []);

  return (
    <div className="About">
      {/* <div id="About__trigger"></div>
      <div className="About__art">
        <ZakSakata className="About__ZakSakata" pathName="About__ZakSakata--path" />
        <div className="About__hideText About__hideSkim"></div>
        <Skim className="About__Skim About__hideSkim" width={100} height={50} />
        <Abstract className="About__abstract" pathName="About__abstract--path" />
        <img className="About__glow" src={Glow} alt="abstract glow art"/>
      </div>
      <Spacer height={150} />
      <div className="About__text">
        After discovering coding two years ago, I've been determined to improve my skills every day as both a developer and UI/UX designer. I've had amazing experiences teaching coding to students, competing in hackathons, and collaborating with many other knowledgable individuals. I'm passionate, always ready for a challenge, and open to new experiences.
      </div> */}
    </div>
  );
}

export default About;