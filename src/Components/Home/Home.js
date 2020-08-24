import React, { useEffect, useRef, useContext } from 'react';
import { OverlayContext } from '../../Utils/OverlayContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Glow from '../../Images/HomeGlow.png';
import { Home as Abstract, Headline, Zak } from '../../SVGs/SVG';
import NavLink from '../NavLink/NavLink';
import isMobile from '../../Utils/isMobile';
import './Home.scss';

const Home = () => {
  const { overlayOpen } = useContext(OverlayContext);
  const homeRef = useRef();
  const loopAnimation = useRef();
  const scrollMsgLoopAnimation = useRef();
  const completedAnimation = useRef(0);

  const controlAnimation = (progress) => {
    if (progress === 1) {
      completedAnimation.current = progress;
    } if (progress.toFixed(3) < 0.001) {
      loopAnimation.current.play();
      scrollMsgLoopAnimation.current.play();
    } else if (progress.toFixed(3) >= 0.001) {
      loopAnimation.current.tweenTo(0);
      scrollMsgLoopAnimation.current.tweenTo(0);
    }
  }

  useEffect(() => {
    if (loopAnimation.current) {
      if (overlayOpen) {
        loopAnimation.current.pause();
      } else {
        if (!completedAnimation.current) {
          loopAnimation.current.play();
        }
      }
    }
  }, [overlayOpen]);
  
  useEffect(() => {
    const isFirefox = (navigator.userAgent.indexOf('Firefox') !== -1);
    gsap.registerPlugin(ScrollTrigger);
    const homeLoadAnimation = gsap.timeline();
    homeLoadAnimation.from('.Home__glow', {
      duration: 1.6, 
      ease: 'ease.out',
      filter: isFirefox ? '' : 'blur(100px)',
      visibility: isFirefox ? 'hidden' : '',
    }, 0);
    homeLoadAnimation.from('.Home__zak', {
      duration: 0.9,
      ease: 'ease.inOut', 
      scale: 1.17,
    }, 0.2);
    homeLoadAnimation.from('.Home__abstract--path', {
      duration: 0.8,
      ease: 'ease.in',
      opacity: 0,
      scale: 1.13,
      skewY: 15,
      transformOrigin: 'center',
      stagger: {
        each: 0.02,
        from: 'center'
      }
    }, '<0.4');
    homeLoadAnimation.from('.Home__headline', {
      duration: 1.3,
      ease: 'power1.out',
      opacity: 0,
      y: -8,
    }, '<0.5');
    homeLoadAnimation.from('.Home__NavLink', {
      duration: 0.8,
      ease: 'power1.out',
      yPercent: -25,
      filter: 'opacity(0)',
      pointerEvents: 'auto',
      stagger: {
        each: 0.1,
        from: 'start'
      }
    }, '<0.3');
    if (overlayOpen) homeLoadAnimation.progress(1, false);
    
    const homeLoadAnimationDuration = homeLoadAnimation.duration();
    const homeLoopAnimation = gsap.timeline({
      delay: homeLoadAnimationDuration - 0.9,
      repeat: -1,
      yoyo: true,
    });
    homeLoopAnimation.to('.Home__abstract', {
      duration: 1.8,
      ease: 'slow.out',
      y: -8,
    }, 0.1);
    homeLoopAnimation.to('.Home__zak', {
      duration: 1.5,
      ease: 'ease.inOut',
      y: -12,
    }, 0);
    homeLoopAnimation.fromTo('.Home__glow', 
    { filter: 'opacity(100%)' },
    {
      duration: 1.45, 
      ease: 'slow.inOut',
      filter: 'opacity(50%)',
      y: -7,
    }, 0.05);
    loopAnimation.current = homeLoopAnimation;

    const scrollMsgAnimation = gsap.timeline({
      delay: homeLoadAnimationDuration - 0.5,
      repeat: -1,
      yoyo: true,
    });
    scrollMsgAnimation.fromTo('.Home__scrollMsg', {
      opacity: 0,
    }, {
      duration: 1.2,
      ease: 'power1.out',
      opacity: 1,
    }, 0);
    scrollMsgAnimation.to('.Home__scrollMsg', {
      duration: 0.7,
      opacity: 1,
    }, '>');
    scrollMsgLoopAnimation.current = scrollMsgAnimation;

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
    homeTimeline.to('.Home__NavLink', {
      duration: 0.6,
      ease: 'power2.in',
      xPercent: isMobile() ? 100 : '',
      y: isMobile() ? '' : -30,
      opacity: 0,
      pointerEvents: 'auto',
      stagger: {
        each: 0.1,
        from: 'start'
      }
    }, 0);
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
      yPercent: 130,
    }, '<0.8');
  }, []); // eslint-disable-line

  return (
    <div className="Home" ref={homeRef}>
      <div className="Home__wrapper">
        <div className="Home__art">
          <img className="Home__glow Home__glow--back" src={Glow} alt="abstract glow art"/>
          <Abstract className="Home__abstract Home__abstract--back" pathName="Home__abstract--path" />
          <Zak className="Home__zak" />
          <img className="Home__glow Home__glow--front" src={Glow} alt="abstract glow art"/>
          <Abstract className="Home__abstract Home__abstract--front" pathName="Home__abstract--path" />
        </div>
        <Headline className="Home__headline" />
      </div>

      <div className="Home__navigation Home__navigation--mobile">
        <NavLink className="Home__NavLink Home__NavLink--projects" text="Projects" lineWidth={30} href='/projects' color='#A1A1A1' />
        <NavLink className="Home__NavLink Home__NavLink--about" text="About" lineWidth={50} href='/about' color='#A1A1A1' />
        <NavLink className="Home__NavLink Home__NavLink--contact" text="Contact" lineWidth={40} href='/contact' color='#A1A1A1' />
      </div>
      <div className="Home__navigation Home__navigation--desktop">
        <NavLink className="Home__NavLink Home__NavLink--projects" text="Projects" lineWidth={0} href='/projects' color='#A1A1A1' />
        <NavLink className="Home__NavLink Home__NavLink--about" text="About" lineWidth={0} href='/about' color='#A1A1A1' />
        <NavLink className="Home__NavLink Home__NavLink--contact" text="Contact" lineWidth={0} href='/contact' color='#A1A1A1' />
      </div>
      
      <div className="Home__scrollMsg">Keep Scrolling</div>
    </div>
  );
}

export default Home;