import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Main from './Components/Main';
import Project from './Components/Project/Project';
import ContactForm from './Components/ContactForm/ContactForm';
import Overlay from './Components/Overlay/Overlay';
import Loader from './Components/Loader/Loader';
import './index.scss';

const App = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Overlay />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/home" exact>
            <Main scrollTo="home" />
          </Route>
          <Route path="/projects" exact>
            <Main scrollTo="projects" />
          </Route>
          <Route path="/about" exact>
            <Main scrollTo="about" />
          </Route>
          <Route path="/project/:id">
            <Project />
          </Route>
          <Route path="/project">
            <Redirect to="/project/1" />
          </Route>
          <Route path="/contact">
            <ContactForm />
          </Route>
          <Router path="/loader">
            <Loader />
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
