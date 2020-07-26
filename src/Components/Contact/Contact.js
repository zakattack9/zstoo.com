import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Glow from '../../Images/ContactGlow.png';
import { Contact as Abstract, LinkedIn, GitHub, Medium, LetsTalk, ContactButton } from '../../SVGs/SVG';
import Spacer from '../Spacer';
import './Contact.scss';

const Contact = () => {
  const contactRef = useRef(null);
  const pinRef = useRef(null);
  const contactInfoStartRef = useRef(null);
  const contactInfoEndRef = useRef(null);

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
        endTrigger: contactInfoStartRef.current,
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

    const contactInfoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: contactInfoStartRef.current,
        endTrigger: contactInfoEndRef.current,
        start: 'top center',
        end: 'bottom 50%',
        scrub: 0.5,
        id: 'contact-form',
        // markers: true,
      }
    });
    contactInfoTimeline.to('.Contact__art', {
      duration: 2.1,
      ease: 'power1.out',
      yPercent: 0,
      skewY: 10,
      scale: 1.5,
    }, 0);
    contactInfoTimeline.to('.Contact__glow', {
      duration: 1,
      ease: 'power1.out',
      opacity: 1,
    }, 0);
    contactInfoTimeline.from('.Contact__LetsTalk--path', {
      duration: 2,
      ease: 'power2.inOut',
      strokeDashoffset: 100,
      y: 5,
      skewY: -5,
      skewX: -5,
      scale: 0.9,
    }, '>-0.1');
    contactInfoTimeline.from('.Contact__contactText', {
      duration: 2,
      ease: 'power2.inOut',
      opacity: 0,
      y: 5,
      skewY: -5,
      skewX: -5,
      scale: 0.9,
    }, '<');

    gsap.from('.Contact__ContactButton--path', {
      duration: 0.7,
      ease: 'power1.inOut',
      strokeDashoffset: -195,
      scrollTrigger: {
        trigger: contactInfoEndRef.current,
        start: '0% 75%',
        toggleActions: 'play complete complete reverse',
        markers: true,
      }
    });

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

        <div className="Contact__info">
          <LetsTalk className="Contact__LetsTalk" pathName="Contact__LetsTalk--path" />
          <div className="Contact__contactText">Ready to start a project or currently looking to hire? Send me an email at sakata.zak@gmail.com or head over to my contact page with the button below</div>
          <ContactButton className="Contact__ContactButton" pathName="Contact__ContactButton--path" />
        </div>

        <div className="Contact__art">
          <Abstract className="Contact__abstract" pathName="Contact__abstract--path" />
          <img className="Contact__glow" src={Glow} alt="abstract glow art"/>
        </div>
      </div>
      <Spacer height={300}/> {/* modify for duration of social links animation */}
      <span className="Contact__trigger--formStart" ref={contactInfoStartRef}></span>
      <Spacer height={100}/> {/* modify for duration of contact info animation */}
      <span className="Contact__trigger--formEnd" ref={contactInfoEndRef}></span>
      <Spacer height={50}/> {/* added space for completion of contact info animation */}
    </div>
  );
}

export default Contact;