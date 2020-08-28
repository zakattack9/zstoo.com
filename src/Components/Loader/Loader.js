import React, { useEffect , useRef } from 'react';
import { gsap } from 'gsap';
import { ZLogo } from '../../SVGs/SVG';
import './Loader.scss';

const Loader = props => {
  const { pause = false } = props;
  const loaderAnimation = useRef();

  useEffect(() => {
    const loaderTimeline = gsap.timeline({
      repeat: -1,
      yoyo: true,
      paused: pause,
    });

    const logoOuter = gsap.timeline({});
    logoOuter.fromTo('.Loader__ZLogo--path-1', {
      strokeDashoffset: 490,
      stroke: '#FFD800',
    }, {
      duration: 0.9,
      ease: 'power1.inOut',
      strokeDashoffset: 0,
      stroke: '#FF000B',
    }, 0);
    logoOuter.fromTo('.Loader__ZLogo--path-1', {
      strokeDashoffset: 0,
      stroke: '#FF000B',
    }, {
      duration: 1,
      ease: 'power2.inOut',
      strokeDashoffset: -490,
      stroke: '#00ACFF',
    }, '>');
    logoOuter.fromTo('.Loader__ZLogo--path-1', {
      strokeDashoffset: -490,
      stroke: '#00ACFF',
    }, {
      duration: 0.9,
      ease: 'power1.inOut',
      strokeDashoffset: 0,
      stroke: '#17FF4A',
    }, '>');
    logoOuter.fromTo('.Loader__ZLogo--path-1', {
      strokeDashoffset: 0,
      stroke: '#17FF4A',
    }, {
      duration: 1,
      ease: 'power2.inOut',
      strokeDashoffset: 490,
      stroke: '#FFD800',
    }, '>');

    const logoInner = gsap.timeline({});
    logoInner.fromTo('.Loader__ZLogo--path-2', {
      strokeDashoffset: -425,
      stroke: '#FF000B',
    }, {
      duration: 0.9,
      ease: 'power1.inOut',
      strokeDashoffset: 0,
      stroke: '#00ACFF',
    }, 0);
    logoInner.fromTo('.Loader__ZLogo--path-2', {
      strokeDashoffset: 0,
      stroke: '#00ACFF',
    }, {
      duration: 1,
      ease: 'power2.inOut',
      strokeDashoffset: 425,
      stroke: '#17FF4A',
    }, '>');
    logoInner.fromTo('.Loader__ZLogo--path-2', {
      strokeDashoffset: 425,
      stroke: '#17FF4A',
    }, {
      duration: 0.9,
      ease: 'power1.inOut',
      strokeDashoffset: 0,
      stroke: '#FFD800',
    }, '>');
    logoInner.fromTo('.Loader__ZLogo--path-2', {
      strokeDashoffset: 0,
      stroke: '#FFD800',
    }, {
      duration: 1,
      ease: 'power2.inOut',
      strokeDashoffset: -425,
      stroke: '#FF000B',
    }, '>');

    loaderTimeline.add(logoOuter, 0);
    loaderTimeline.add(logoInner, 0);
    loaderAnimation.current = loaderTimeline;
  }, []) // eslint-disable-line

  useEffect(() => {
    if (!pause) loaderAnimation.current.play();
    else loaderAnimation.current.pause();
  }, [pause])

  return (
    <div className={`Loader ${props.className}`}>
      <ZLogo 
        className="Loader__ZLogo" 
        pathName1="Loader__ZLogo--path-1" 
        pathName2="Loader__ZLogo--path-2"
      />
    </div>
  );
}

export default Loader;