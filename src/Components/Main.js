import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import About from './About/About';
import Contact from './Contact/Contact';
import './Main.scss';

const Main = () => {
  const [projectId, setProjectId] = useState(null);

  const projectClick = (id) => setProjectId(id);
  // redirect needs to be in topmost component to properly unmount Home, About, and Contact when redirecting away from Projects
  if (projectId) {
    return <Redirect push to={{
      pathname: `/project/${projectId}`,
      state: { projectId } 
    }}/>
  }

  return (
    <div className="Main">
      <Home />
      <Projects projectClick={projectClick} />
      <About />
      <Contact />
    </div>
  );
}

export default Main;