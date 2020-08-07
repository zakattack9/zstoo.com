import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Overlay as Abstract } from '../../SVGs/SVG';
import { LinkedIn, GitHub, Medium } from '../../SVGs/SVG';
import { Link } from 'react-router-dom';
import Glow from '../../Images/OverlayGlow.png';
import './Overlay.scss';

const Overlay = props => {
  const [isOpen, setIsOpen] = useState(false);
  const iconAnimation = useRef();
  const overlayAnimation = useRef();
  const linkWrapperRef = useRef();
  const iconWrapperRef = useRef();
  
  const handleOverlay = (clickedLink) => {
    if (clickedLink) {
      iconWrapperRef.current.classList.add('preventClick');
      linkWrapperRef.current.classList.add('preventClick');
    }
    setIsOpen(!isOpen);
  }
  
  useEffect(() => {
    if (iconAnimation.current) {
      iconAnimation.current.pause();
      overlayAnimation.current.pause();
      if (isOpen) {
        document.querySelector('body').classList.add('preventScroll');
        iconAnimation.current.play();
        overlayAnimation.current.play();
      } else  {
        iconAnimation.current.reverse();
        overlayAnimation.current.reverse().then(() => {
          document.querySelector('body').classList.remove('preventScroll');
          iconWrapperRef.current.classList.remove('preventClick');
          linkWrapperRef.current.classList.remove('preventClick');
        });
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const overlayIconTimeline = gsap.timeline({ paused: true });
    overlayIconTimeline.fromTo('.Overlay__icon--top', {
      x: 0,
    }, {
      duration: 0.5,
      ease: 'back.in',
      x: '0.5em'
    }, 0);
    overlayIconTimeline.fromTo('.Overlay__icon--top', {
      y: 0,
    }, {
      duration: 0.3,
      ease: 'back.in',
      y: '0.425em'
    }, '>');
    overlayIconTimeline.fromTo('.Overlay__icon--bottom', {
      y: 0,
    }, {
      duration: 0.3,
      ease: 'back.in',
      y: '-0.425em'
    }, '<');
    overlayIconTimeline.fromTo('.Overlay__icon--top', {
      rotate: 0,
    }, {
      duration: 0.8,
      ease: 'back.out',
      rotate: '225deg'
    }, '>');
    overlayIconTimeline.fromTo('.Overlay__icon--bottom', {
      rotate: 0,
    }, {
      duration: 0.8,
      ease: 'back.out',
      rotate: '315deg'
    }, '<');
    iconAnimation.current = overlayIconTimeline;

    const overlayTimeline = gsap.timeline({ paused: true });
    overlayTimeline.fromTo('.Overlay', {
      pointerEvents: 'none',
    }, {
      pointerEvents: 'auto',
    }, 0);
    overlayTimeline.fromTo('.Overlay__backgroundCover', {
      opacity: 0,
      pointerEvents: 'none',
    }, {
      duration: 0.6,
      ease: 'slow.inOut',
      opacity: 1,
      pointerEvents: 'auto',
    }, 0);
    overlayTimeline.fromTo('.Overlay__link', {
      skewX: -15,
      skewY: 15,
      y: -15,
      opacity: 0,
    }, {
      duration: 0.5,
      ease: 'ease.inOut',
      skewX: 0,
      skewY: 0,
      y: 0,
      opacity: 1,
      stagger: {
        each: 0.2,
        from: 'start',
      }
    }, '>');
    overlayTimeline.fromTo('.Overlay__abstract--path', {
      strokeDashoffset: 770,
    }, {
      duration: 1,
      ease: 'sine.in',
      strokeDashoffset: 0,
      stagger: {
        each: 0.02,
        from: 'center',
      }
    }, '<0.2');
    overlayTimeline.addLabel('socialIcon', '<0.2');
    overlayTimeline.fromTo('.Overlay__glow', {
      opacity: 0,
    }, {
      duration: 0.5,
      ease: 'ease.inOut',
      opacity: 1,
    }, '>-0.3');
    overlayTimeline.fromTo('.Overlay__socialIcon--GitHub', {
      strokeDashoffset: -395,
    }, {
      duration: 0.6,
      ease: 'power1.inOut',
      strokeDashoffset: 0,
    }, 'socialIcon');
    overlayTimeline.fromTo('.Overlay__socialIcon--Medium', {
      strokeDashoffset: -485,
    }, {
      duration: 0.6,
      ease: 'power1.inOut',
      strokeDashoffset: 0,
    }, 'socialIcon');
    overlayTimeline.fromTo('.Overlay__socialIcon--LinkedIn', {
      strokeDashoffset: -265,
    }, {
      duration: 0.6,
      ease: 'power1.inOut',
      strokeDashoffset: 0,
    }, 'socialIcon');
    overlayAnimation.current = overlayTimeline;
  }, []);

  return <>
    <div className="Overlay__iconWrapper" onClick={() => handleOverlay(false)} ref={iconWrapperRef}>
      <div className="Overlay__icon Overlay__icon--top"></div>
      <div className="Overlay__icon Overlay__icon--bottom"></div>
    </div>
    <div className="Overlay">
      <div className="Overlay__linkWrapper center" ref={linkWrapperRef}>
        <Link to="/">
          <div className="Overlay__link Overlay__link--home" onClick={() => handleOverlay(true)}>Home</div>
        </Link>
        <Link to="/">
          <div className="Overlay__link Overlay__link--projects" onClick={() => handleOverlay(true)}>Projects</div>
        </Link>
        <Link to="/">
          <div className="Overlay__link Overlay__link--about" onClick={() => handleOverlay(true)}>About</div>
        </Link>
        <Link to="/contact">
          <div className="Overlay__link Overlay__link--contact" onClick={() => handleOverlay(true)}>Contact</div>
        </Link>
      </div>

      <div className="Overlay__socialIconWrapper">
        <GitHub className="Overlay__socialIcon Overlay__socialIcon--GitHub" pathName="Overlay__GitHub--path" gradient="overlay" />
        <Medium className="Overlay__socialIcon Overlay__socialIcon--Medium" pathName="Overlay__Medium--path" gradient="overlay" />
        <LinkedIn className="Overlay__socialIcon Overlay__socialIcon--LinkedIn" pathName="Overlay__LinkedIn--path" gradient="overlay" />
      </div>

      <div className="Overlay__art">
        <Abstract className="Overlay__abstract center" pathName="Overlay__abstract--path" />
        <img className="Overlay__glow center" src={Glow} alt="abstract glow art" />
      </div>
    </div>
    <div className="Overlay__backgroundCover"></div>
  </>;
}

export default Overlay;