import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Glow from '../../Images/ContactGlow.png';
import { Contact as Abstract, LinkedIn, GitHub, Medium } from '../../SVGs/SVG';
import Spacer from '../Spacer';
import './Contact.scss';

const Contact = () => {
  const contactRef = useRef(null);
  const pinRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: pinRef.current,
      endTrigger: contactRef.current,
      pin: true,
      pinSpacing: false,
      id: 'contact-pin',
      // markers: true,
    });

    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: '5% 0%',
        end: '80% 45%',
        scrub: 1,
        id: 'contact',
        // markers: true,
      }
    });
    contactTimeline.from('.Contact__abstract--path', {
      duration: 2.5,
      ease: 'power1.out',
      strokeDashoffset: 1122,
      stagger: {
        each: 0.3,
        from: 'start'
      }
    }, 0);

    contactTimeline.from('.Contact__icon--LinkedIn', {
      duration: 0.5,
      ease: 'power1.out',
      strokeDashoffset: -265,
      y: -5,
    }, '<0.5');
    contactTimeline.from('.Contact__iconText--LinkedIn', {
      duration: 0.5,
      ease: 'power1.out',
      opacity: 0,
      y: 5,
    }, '<');
    contactTimeline.to('.Contact__icon--LinkedIn', {
      duration: 0.5,
      ease: 'power1.out',
      strokeDashoffset: 265,
      y: -5,
    }, '>0.5');
    contactTimeline.to('.Contact__iconText--LinkedIn', {
      duration: 0.5,
      ease: 'power1.out',
      opacity: 0,
      y: 5,
    }, '<');

    contactTimeline.from('.Contact__icon--GitHub', {
      duration: 0.5,
      ease: 'power1.out',
      strokeDashoffset: -395,
      y: -5,
    }, '>');
    contactTimeline.from('.Contact__iconText--GitHub', {
      duration: 0.5,
      ease: 'power1.out',
      opacity: 0,
      y: 5,
    }, '<');
    contactTimeline.to('.Contact__icon--GitHub', {
      duration: 0.5,
      ease: 'power1.out',
      strokeDashoffset: 395,
      y: -5,
    }, '>0.5');
    contactTimeline.to('.Contact__iconText--GitHub', {
      duration: 0.5,
      ease: 'power1.out',
      opacity: 0,
      y: 5,
    }, '<');

    contactTimeline.from('.Contact__icon--Medium', {
      duration: 0.5,
      ease: 'power1.out',
      strokeDashoffset: -485,
      y: -5,
    }, '>');
    contactTimeline.from('.Contact__iconText--Medium', {
      duration: 0.5,
      ease: 'power1.out',
      opacity: 0,
      y: 5,
    }, '<');
    contactTimeline.to('.Contact__icon--Medium', {
      duration: 0.5,
      ease: 'power1.out',
      strokeDashoffset: 485,
      y: -5,
    }, '>0.5');
    contactTimeline.to('.Contact__iconText--Medium', {
      duration: 0.5,
      ease: 'power1.out',
      opacity: 0,
      y: 5,
    }, '<');


  }, []);

  return (
    <div className="Contact" ref={contactRef}>
      <div className="Contact__pin" ref={pinRef}>
        <div className="Contact__wrapper">
          <LinkedIn className="Contact__icon Contact__icon--LinkedIn" pathName="Contact__LinkedIn--path" />
          <div className="Contact__iconText Contact__iconText--LinkedIn">View my full<br/>resume on LinkedIn</div>

          <GitHub className="Contact__icon Contact__icon--GitHub" pathName="Contact__GitHub--path" />
          <div className="Contact__iconText Contact__iconText--GitHub">Browse all my<br/>projects on GitHub</div>

          <Medium className="Contact__icon Contact__icon--Medium" pathName="Contact__Medium--path" />
          <div className="Contact__iconText Contact__iconText--Medium">Check out my<br/>articles on Medium</div>
        </div>

        <div className="Contact__art">
          <Abstract className="Contact__abstract" pathName="Contact__abstract--path" />
          <img className="Contact__glow" src={Glow} alt="abstract glow art"/>
        </div>
      </div>
      <Spacer height={200} />
    </div>
  );
}

export default Contact;