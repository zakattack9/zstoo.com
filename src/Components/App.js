import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import About from './About/About';
import Contact from './Contact/Contact';
import Project from './Project/Project';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact>
            <Home />
            <Projects />
            <About />
            <Contact />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;