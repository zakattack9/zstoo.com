import React, { Suspense, lazy, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { OverlayContext } from './Utils/OverlayContext';
import Loader from './Components/Loader/Loader';
import './index.scss';

// lazy import components shared on desktop and mobile
const Overlay = lazy(() => import('./Components/Overlay/Overlay'));
const Error404 = lazy(() => import('./Components/Error404/Error404'));

const App = () => {
  const [view, setView] = useState('Mobile');
  const [overlayOpen, setOverlayOpen] = useState(false);
  const value = {overlayOpen, setOverlayOpen};

  // lazy import correct components for either desktop or mobile view
  const Main = lazy(() => import(`./${view}/Main/Main`));
  const Project = lazy(() => import(`./${view}/Project/Project`));
  const ContactForm = lazy(() => import(`./${view}/ContactForm/ContactForm`));

  const determineView = () => {
    const MIN_DESKTOP_WIDTH = 700;
    setView(window.innerWidth < MIN_DESKTOP_WIDTH ? 'Mobile' : 'Desktop');
  };
  
  useEffect(() => {
    determineView();
    window.addEventListener('resize', determineView);
  }, []);

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<Loader />}>
          <OverlayContext.Provider value={value}>
            <Overlay />
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route exact path="/home">
                <Main scrollTo="home" />
              </Route>
              <Route exact path="/projects">
                <Main scrollTo="projects" />
              </Route>
              <Route exact path="/about">
                <Main scrollTo="about" />
              </Route>

              <Route exact path="/project/:id">
                <Project />
              </Route>
              <Route exact path="/project">
                <Redirect to="/project/1" />
              </Route>

              <Route exact path="/contact">
                <ContactForm />
              </Route>

              <Route path="/loader">
                <Loader />
              </Route>

              <Route>
                <Error404 />
              </Route>
            </Switch>
          </OverlayContext.Provider>
        </Suspense>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));