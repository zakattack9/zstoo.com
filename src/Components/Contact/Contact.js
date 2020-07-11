import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Contact as Abstract } from '../../SVGs/SVG';
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
      markers: true,
    });

    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: '5% 0%',
        // end: 'top 35%',
        scrub: 1,
        id: 'contact',
        markers: true,
      }
    });
    contactTimeline.from('.Contact__abstract--path', {
      duration: 1.3,
      ease: 'power2.inOut',
      strokeDashoffset: 1122,
      stagger: {
        each: 0.05,
        from: 'start'
      }
    }, 0);

  }, []);

  return (
    <div className="Contact" ref={contactRef}>
      <div className="Contact__pin" ref={pinRef}>
        <Abstract className="Contact__abstract" pathName="Contact__abstract--path" />
      </div>
      <Spacer height={200} />
    </div>
  );
}

export default Contact;