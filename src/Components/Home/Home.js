import React, { useEffect } from 'react';
import { ScrollScene, addIndicators } from 'scrollscene';
import { gsap } from 'gsap';
import Zak from '../../SVGs/ZAK.svg';
import Glow from '../../Images/HomeGlow.png';
import { Home as Abstract, Headline } from '../../SVGs/SVG';
import './Home.scss';

const Home = () => {
  useEffect(() => {
    const homeTimeline = gsap.timeline({ paused: true });
    homeTimeline.to('.Home__abstract--path', {
      duration: 0.6,
      ease: 'power3.inOut',
      strokeDashoffset: 239,
      stagger: {
        each: 0.01,
        from: 'edges'
      }
    }, 0.1);

    homeTimeline.to('.Home__glow', {
      duration: 0.5, 
      ease: 'power2.inOut',
      opacity: 0,
      y: 20,
      scale: 0.84,
    }, 0);

    homeTimeline.to('.Home__headline', {
      duration: 1,
      ease: 'power3.inOut',
      strokeDashoffset: 130,
    }, 0.3);

    homeTimeline.to('.Home__zak', {
      duration: 0.5,
      ease: 'power2.in', 
      opacity: 0,
      y: 70,
    }, 0.8);

    const homeTrigger = document.querySelector('#Home__trigger');
    const scrollScene = new ScrollScene({
      triggerElement: homeTrigger,
      triggerHook: 0,
      gsap: { timeline: homeTimeline },
      duration: 800
    })
    scrollScene.Scene.setPin('.Home__wrapper');
    // scrollScene.Scene.addIndicators({ name: 'home scene', colorEnd: '#FFFFFF' })

    // return () => {
    //   // clean up ScrollScene here
    // }
  }, []);

  return (
    <div className="Home">
      <div id="Home__trigger"></div>
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