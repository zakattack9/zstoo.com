import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Glow from '../../Images/AboutGlow.png';
import { About as Abstract, ZakSakata } from '../../SVGs/SVG';
import Spacer from '../Spacer';
import Skim from '../Skim/Skim';
import './About.scss';

const About = () => {
  const about = useRef(null);
  const pinRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: pinRef.current,
      endTrigger: about.current,
      pin: true,
      pinSpacing: false,
      id: 'pin',
      // markers: true,
    });

    const aboutTimeline = gsap.timeline({ 
      scrollTrigger: {
        trigger: about.current,
        start: '-10% 0%',
        end: '70% 50%', // modify first % for duration of animation
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
      delay: 0.3,
    }, 0.4);
    aboutTimeline.from('.About__hideSkim', {
      duration: 0.1,
      opacity: 0,
      delay: 1,
    }, 0);
  }, []);

  return (
    <div className="About" ref={about}>
      <div className="About__pin" ref={pinRef}>
        <div className="About__wrapper">
          <ZakSakata className="About__ZakSakata" pathName="About__ZakSakata--path" />
          <div className="About__SkimCover About__hideSkim"></div>
          <Skim className="About__Skim About__hideSkim" width={100} height={100} />
        </div>

        <Abstract className="About__abstract" pathName="About__abstract--path" />
        <img className="About__glow" src={Glow} alt="abstract glow art"/>
      </div>
      <Spacer height={50} />
      <div className="About__text">
        After discovering coding two years ago, I've been determined to improve my skills every day as both a developer and UI/UX designer. I've had amazing experiences teaching coding to students, competing in hackathons, and collaborating with many other knowledgable individuals. I'm passionate, always ready for a challenge, and open to new experiences.
      </div>
    </div>
  );
}

export default About;