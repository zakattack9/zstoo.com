import React, { useEffect } from 'react';
import { ScrollScene, addIndicators } from 'scrollscene';
import { gsap } from 'gsap';
import Glow from '../../Images/AboutGlow.png';
import { About as Abstract, ZakSakata } from '../../SVGs/SVG';
import Spacer from '../Spacer';
import './About.scss';

const About = () => {
  useEffect(() => {
    const aboutTimeline = gsap.timeline({ paused: true });
    aboutTimeline.from('.About__abstract--path', {
      duration: 1.5,
      ease: 'power2.inOut',
      strokeDashoffset: 750,
      stagger: {
        each: 0.02,
        from: 'start'
      }
    }, 0);

    aboutTimeline.from('.About__ZakSakata--path', {
      duration: 1,
      ease: 'power1.inOut',
      strokeDashoffset: -1545,
      stagger: {
        each: 0.02,
        from: 'start'
      }
    }, 1);

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
      offset: -50,
      duration: 1000
    })
    // scrollScene.Scene.addIndicators({ name: 'about scene', colorEnd: '#FFFFFF' });

    const pinScrollScene = new ScrollScene({
      triggerElement: aboutTrigger,
      triggerHook: 0,
      offset: -50,
      duration: 2000
    })
    pinScrollScene.Scene.setPin('.About__art');
    pinScrollScene.Scene.addIndicators({ name: 'about pin scene', colorEnd: '#FFFFFF' });


    const zakSakataTimeline = gsap.timeline({ paused: true });
    // zakSakataTimeline.from('.About__ZakSakata--path', {
    //   duration: 1,
    //   ease: 'power1.inOut',
    //   strokeDashoffset: -1545,
    //   stagger: {
    //     each: 0.02,
    //     from: 'start'
    //   }
    // }, 0);
    // const zakSakataSS = new ScrollScene({
    //   triggerElement: aboutTrigger,
    //   triggerHook: 0,
    //   gsap: { timeline: zakSakataTimeline },
    //   offset: 800,
    //   duration: 500
    // })
    // const pinZakSakataSS = new ScrollScene({
    //   triggerElement: aboutTrigger,
    //   triggerHook: 0,
    //   offset: 100,
    //   duration: 1000
    // })
    // pinZakSakataSS.Scene.setPin('.About__ZakSakata');
    // zakSakataSS.Scene.addIndicators({ name: 'zak sakata scene', colorEnd: '#FFFFFF' });

    return () => {
      scrollScene.destroy();
      pinScrollScene.destroy();
    }
  }, []);

  return (
    <div className="About">
      <div id="About__trigger"></div>
      <div className="About__art">
        <ZakSakata className="About__ZakSakata" pathName="About__ZakSakata--path" />
        <Abstract className="About__abstract" pathName="About__abstract--path" />
        {/* <img className="About__glow" src={Glow} alt="abstract glow art"/> */}
      </div>
    </div>
  );
}

export default About;