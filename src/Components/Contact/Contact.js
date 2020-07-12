import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Glow from '../../Images/ContactGlow.png';
import { Contact as Abstract, LinkedIn, GitHub, Medium } from '../../SVGs/SVG';
import Spacer from '../Spacer';
import ContactForm from './ContactForm';
import './Contact.scss';

const Contact = () => {
  const contactRef = useRef(null);
  const pinRef = useRef(null);
  const formStartRef = useRef(null);
  const formEndRef = useRef(null);

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
        endTrigger: formStartRef.current,
        start: '5% 0%',
        end: '80% 45%',
        scrub: 1,
        id: 'contact',
        // markers: true,
      }
    });
    contactTimeline.from('.Contact__abstract--path', {
      duration: 3.5,
      ease: 'power1.out',
      strokeDashoffset: 1122,
      stagger: {
        each: 0.2,
        from: 'start'
      }
    }, 0);

    const iconParams = {
      duration: 0.5,
      ease: 'power1.out',
      y: -5,
    };
    const iconTextParams = {
      duration: 0.5,
      ease: 'power1.out',
      opacity: 0,
      y: 5,
    };
    contactTimeline.from('.Contact__icon--LinkedIn', {
      ...iconParams,
      strokeDashoffset: -265,
    }, '<0.5');
    contactTimeline.from('.Contact__iconText--LinkedIn', {
      ...iconTextParams
    }, '<');
    contactTimeline.to('.Contact__icon--LinkedIn', {
      ...iconParams,
      strokeDashoffset: 265,
    }, '>0.5');
    contactTimeline.to('.Contact__iconText--LinkedIn', {
      ...iconTextParams
    }, '<');

    contactTimeline.from('.Contact__icon--GitHub', {
      ...iconParams,
      strokeDashoffset: -395,
    }, '>');
    contactTimeline.from('.Contact__iconText--GitHub', {
      ...iconTextParams
    }, '<');
    contactTimeline.to('.Contact__icon--GitHub', {
      ...iconParams,
      strokeDashoffset: 395,
    }, '>0.5');
    contactTimeline.to('.Contact__iconText--GitHub', {
      ...iconTextParams
    }, '<');

    contactTimeline.from('.Contact__icon--Medium', {
      ...iconParams,
      strokeDashoffset: -485,
    }, '>');
    contactTimeline.from('.Contact__iconText--Medium', {
      ...iconTextParams
    }, '<');
    contactTimeline.to('.Contact__icon--Medium', {
      ...iconParams,
      strokeDashoffset: 485,
    }, '>0.5');
    contactTimeline.to('.Contact__iconText--Medium', {
      ...iconTextParams
    }, '<');

    const contactFormTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: formStartRef.current,
        endTrigger: formEndRef.current,
        start: 'top center',
        end: 'bottom 60%',
        scrub: 1,
        id: 'contact-form',
        markers: true,
      }
    });
    contactFormTimeline.to('.Contact__art', {
      duration: 3,
      ease: 'power1.out',
      yPercent: 5,
      skewY: 10,
      scale: 1.25,
    }, 0);
    contactFormTimeline.to('.Contact__glow', {
      duration: 3,
      ease: 'power1.out',
      opacity: 1,
    }, 0);
    contactFormTimeline.from('.ContactForm__input', {
      duration: 1.8,
      backgroundImage: 'linear-gradient(#5F5F5F, #000000), linear-gradient(90deg, #000000, #000000)',
      opacity: 0,
      y: -10,
      skewY: -10,
      skewX: -10,
      scale: 0.9,
      stagger: {
        each: 0.4,
        from: 'end'
      },
    }, '<0.2');

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

        <div className="Contact__form">
          <ContactForm />
        </div>

        <div className="Contact__art">
          <Abstract className="Contact__abstract" pathName="Contact__abstract--path" />
          <img className="Contact__glow" src={Glow} alt="abstract glow art"/>
        </div>
      </div>
      <Spacer height={300}/>
      <span className="Contact__trigger--formStart" ref={formStartRef}></span>
      <Spacer height={100}/>
      <span className="Contact__trigger--formEnd" ref={formEndRef}></span>
      <Spacer height={200}/>
    </div>
  );
}

export default Contact;