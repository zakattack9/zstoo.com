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
  const overlayRef = useRef();

  const handleOverlay = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (iconAnimation.current) {
      iconAnimation.current.pause();
      if (isOpen) {
        iconAnimation.current.play();
      } else  {
        iconAnimation.current.reverse();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const overlayIconAnimation = gsap.timeline({ paused: true });
    overlayIconAnimation.fromTo('.Overlay__icon--top', {
      x: 0,
    }, {
      duration: 0.5,
      ease: 'back.in',
      x: '0.5em'
    }, 0);
    overlayIconAnimation.fromTo('.Overlay__icon--top', {
      y: 0,
    }, {
      duration: 0.3,
      ease: 'back.in',
      y: '0.425em'
    }, '>');
    overlayIconAnimation.fromTo('.Overlay__icon--bottom', {
      y: 0,
    }, {
      duration: 0.3,
      ease: 'back.in',
      y: '-0.425em'
    }, '<');
    overlayIconAnimation.fromTo('.Overlay__icon--top', {
      rotate: 0,
    }, {
      duration: 0.8,
      ease: 'back.out',
      rotate: '225deg'
    }, '>');
    overlayIconAnimation.fromTo('.Overlay__icon--bottom', {
      rotate: 0,
    }, {
      duration: 0.8,
      ease: 'back.out',
      rotate: '315deg'
    }, '<');
    iconAnimation.current = overlayIconAnimation;
  }, []);

  return (
    <div className="Overlay" ref={overlayRef}>
      <div className="Overlay__iconWrapper" onClick={handleOverlay}>
        <div className="Overlay__icon Overlay__icon--top"></div>
        <div className="Overlay__icon Overlay__icon--bottom"></div>
      </div>

      <div className="Overlay__linkWrapper center">
        <Link to="/">
          <div className="Overlay__link Overlay__link--home">Home</div>
        </Link>
        <Link to="/">
          <div className="Overlay__link Overlay__link--projects">Projects</div>
        </Link>
        <Link to="/">
          <div className="Overlay__link Overlay__link--about">About</div>
        </Link>
        <Link to="/">
          <div className="Overlay__link Overlay__link--contact">Contact</div>
        </Link>
      </div>

      <div className="Overlay__socialIconWrapper">
        <GitHub className="Overlay__socialIcon Overlay__socialIcon--GitHub" pathName="Overlay__GitHub--path" gradient="overlay" />
        <Medium className="Overlay__socialIcon Overlay__socialIcon--Medium" pathName="Overlay__Medium--path" gradient="overlay" />
        <LinkedIn className="Overlay__socialIcon Overlay__socialIcon--LinkedIn" pathName="Overlay__LinkedIn--path" gradient="overlay" />
      </div>

      <div className="Overlay__art">
        <Abstract className="Overlay__abstract center " pathName="Project__abstract--path" />
        <img className="Overlay__glow center" src={Glow} alt="abstract glow art" />
      </div>
    </div>
  );
}

export default Overlay;