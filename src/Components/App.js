import React from 'react';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import About from './About/About';
import Contact from './Contact/Contact';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;