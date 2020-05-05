import React from 'react';
import Spacer from './Spacer';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import About from './About/About';
import Contact from './Contact/Contact';
import './App.scss';

function App() {
  // used to add scroll space for scroll animations between scenes
  const sceneDuration = { // units in vh
    Home: 200,
    Projects: 0,
    About: 0,
    Contact: 0
  };

  return (
    <div className="App">
      <Home />
      <Spacer height={sceneDuration.Home} />

      <Projects />
      <Spacer height={sceneDuration.Projects} />

      <About />
      <Spacer height={sceneDuration.About} />

      <Contact />
      <Spacer height={sceneDuration.Contact} />
    </div>
  );
}

export default App;