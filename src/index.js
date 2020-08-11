import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Loader from './Components/Loader/Loader';
import './index.scss';

const Main = lazy(() => import('./Components/Main'));
const Overlay = lazy(() => import('./Components/Overlay/Overlay'));
const Project = lazy(() => import('./Components/Project/Project'));
const ContactForm = lazy(() => import('./Components/ContactForm/ContactForm'));

const App = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<Loader/>}>
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
        </Suspense>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
