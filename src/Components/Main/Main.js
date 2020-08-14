import React, { useState, useEffect, useRef } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';
import './Main.scss';

const Main = props => {
  const [projectId, setProjectId] = useState(null);
  const [calculated, setCalculated] = useState(false);
  const location = useLocation();
  const scrollPos = useRef({});

  const calculateScrollPos = () => {
    const main = document.querySelector('.Main');
    const project = document.querySelector('.Projects__wrapper');
    const about = document.querySelector('.About__text--about');
    // prevents error when this function is called on unmount
    if (main && project && about) {
      const mainPos = main.getBoundingClientRect();
      const projectsPos = project.getBoundingClientRect();
      const aboutPos = about.getBoundingClientRect();
      const projectsTop = (mainPos.top * -1) + projectsPos.top;
      const aboutTop = (mainPos.top * -1) + aboutPos.top - (window.innerHeight * 0.25);
      scrollPos.current = {
        home: 0,
        projects: projectsTop,
        about: aboutTop,
      }
      setCalculated(true);
    }
  }
  
  useEffect(() => {
    const { pathname } = location;
    if (calculated) {
      if (pathname === "/home") {
        window.scrollTo(0, scrollPos.current.home);
      } else if (pathname === "/projects") {
        window.scrollTo(0, scrollPos.current.projects);
      } else if (pathname === "/about") {
        window.scrollTo(0, scrollPos.current.about);
      }
    }
  }, [calculated, location, location.pathname])

  useEffect(() => {
    calculateScrollPos();
    document.querySelector('.Main').classList.remove('hide');
    window.addEventListener('resize', () => {
      // wait for ScrollTrigger to recalculate positioning
      setTimeout(() => { calculateScrollPos() }, 201);
    });
  }, [])

  const projectClick = (id) => setProjectId(id);
  // redirect needs to be in topmost component to properly unmount Home, About, and Contact when redirecting away from Projects
  if (projectId) {
    return <Redirect push from='/' to={{
      pathname: `/project/${projectId}`,
      state: { projectId } 
    }}/>
  }

  return (
    <div className="Main hide">
      <Home />
      <Projects projectClick={projectClick} />
      <About />
      <Contact />
    </div>
  );
}

export default Main;