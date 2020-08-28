import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Error404 as Abstract } from '../../SVGs/SVG';
import Glow from '../../Images/Error404Glow.png';
import './Error404.scss';

const Error404 = props => {
  useEffect(() => {
    const error404Timeline = gsap.timeline({});
    error404Timeline.from('.Error404__message', {
      duration: 1,
      ease: 'power1.inOut',
      opacity: 0,
      stagger: {
        each: 0.3,
        from: 'start',
      }
    }, 0);
    error404Timeline.from('.Error404__abstract--path', {
      duration: 0.7,
      ease: 'power3.inOut',
      strokeDashoffset: -405,
      zIndex: 0,
    }, '>-0.6');
    error404Timeline.from('.Error404__subMessage', {
      duration: 0.7,
      ease: 'power2.inOut',
      opacity: 0,
    }, '<');
    error404Timeline.from('.Error404__homeButton', {
      duration: 1,
      ease: 'power2.inOut',
      opacity: 0,
    }, '<0.15');
    error404Timeline.from('.Error404__glow', {
      duration: 0.7,
      ease: 'power1.inOut',
      opacity: 0,
    }, '<');
  }, []);

  return (
    <div className="Error404">
      <div className="Error404__wrapper">
        <div className="Error404__art">
          <Abstract className="Error404__abstract" pathName="Error404__abstract--path" />
          <img className="Error404__glow" src={Glow} alt="abstract glow art"/>
          <div className="Error404__messageWrapper">
            <div className="Error404__message Error404__message--statusCode">
              4<span className="Error404__message--0">0</span>4
            </div>
            <div className="Error404__message Error404__message--text">
              page not found
            </div>
          </div>
        </div>
        <div className="Error404__subMessage">
          well this shouldn't <br /> happen.
        </div>
        <Link to="/">
          <div className="Error404__homeButton">
            Back to Safety
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Error404;