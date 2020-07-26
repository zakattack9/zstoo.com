import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Zak from '../../SVGs/ZAK.svg';
import Glow from '../../Images/HomeGlow.png';
import { Home as Abstract, Headline } from '../../SVGs/SVG';
import './Home.scss';

const Home = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const homeLoadAnimation = gsap.timeline();
    homeLoadAnimation.from('.Home__abstract--path', {
      duration: 0.6,
      ease: 'ease.in',
      opacity: 0,
      scale: 1.13,
      skewY: 5,
      transformOrigin: 'center',
      stagger: {
        each: 0.02,
        from: 'center'
      }
    }, 0.4);
    homeLoadAnimation.from('.Home__headline', {
      duration: 1.2,
      ease: 'power1.out',
      opacity: 0,
      y: -5,
    }, 0.7);
    homeLoadAnimation.from('.Home__zak', {
      duration: 0.9,
      ease: 'ease.inOut', 
      scale: 1.15,
    }, 0);

    const homeLoopAnimation = gsap.timeline({
      delay: 1,
      repeat: -1,
      yoyo: true,
    });
    homeLoopAnimation.addLabel('start', 0);
    homeLoopAnimation.to('.Home__abstract', {
      duration: 1.7,
      ease: 'slow.inOut',
      y: -7,
    }, 0);
    homeLoopAnimation.to('.Home__zak', {
      duration: 1.7,
      ease: 'slow.inOut',
      y: -12,
    }, 0);
    homeLoopAnimation.fromTo('.Home__glow', 
    { filter: 'opacity(100%)' },
    {
      duration: 1.45, 
      ease: 'slow.inOut',
      filter: 'opacity(50%)',
      y: -7,
    }, 0);
    const controlAnimation = (progress) => {
      if (progress.toFixed(3) < 0.001) {
        homeLoopAnimation.play();
      }
      if (progress.toFixed(3) >= 0.001) {
        homeLoopAnimation.tweenTo('start');
      }
    }

    const homeTimeline = gsap.timeline({ 
      scrollTrigger: {
        trigger: homeRef.current,
        // end: 'bottom -10%',
        onUpdate: ({progress}) => controlAnimation(progress),
        pin: true,
        scrub: 0.5,
        pinSpacing: false,
        // markers: true,
      }
    });
    homeTimeline.to('.Home__glow', {
      duration: 0.6, 
      ease: 'power2.inOut',
      opacity: 0,
      // y: 20,
      scale: 0.84,
    }, 0.3);
    homeTimeline.to('.Home__abstract--path', {
      duration: 0.6,
      ease: 'power3.inOut',
      strokeDashoffset: 239,
      stagger: {
        each: 0.01,
        from: 'edges'
      }
    }, '<0.1');
    homeTimeline.to('.Home__headline', {
      duration: 1,
      ease: 'power3.inOut',
      strokeDashoffset: 130,
    }, '<0.3');
    homeTimeline.to('.Home__zak', {
      duration: 0.5,
      ease: 'power2.in', 
      opacity: 0,
      y: 70,
    }, '<0.8');
  }, []);

  return (
    <div className="Home" ref={homeRef}>
      <div className="Home__wrapper">
        <div className="Home__art">
          <img className="Home__glow Home__glow--back" src={Glow} alt="abstract glow art"/>
          <Abstract className="Home__abstract Home__abstract--back" pathName="Home__abstract--path" />
          <img className="Home__zak" src={Zak} alt="Zak"/>
          <img className="Home__glow Home__glow--front" src={Glow} alt="abstract glow art"/>
          <Abstract className="Home__abstract Home__abstract--front" pathName="Home__abstract--path" />
        </div>
        <Headline className="Home__headline" />
      </div>
    </div>
  );
}

export default Home;