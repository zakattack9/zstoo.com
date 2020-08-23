import React from 'react';
import Home from '../../Components/Home/Home';
import Projects from '../Projects/Projects';
import About from '../About/About';
import './Main.scss';

const Main = () => {
  return (
    <div className="Main">
      <Home />
      <Projects />
      <About />
    </div>
  );
}

export default Main;