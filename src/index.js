import React, { Suspense, lazy, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Loader from './Components/Loader/Loader';
import { OverlayContext } from './Utils/OverlayContext';
import isMobile from './Utils/isMobile';
import './index.scss';

// lazy import components shared on desktop and mobile
const Overlay = lazy(() => import('./Components/Overlay/Overlay'));
const Error404 = lazy(() => import('./Components/Error404/Error404'));

const determineView = () => isMobile() ? 'Mobile' : 'Desktop';

// lazy import components that change for either desktop or mobile view
let view = determineView();
let Main, Project, ContactForm;
const setViewComponents = () => {
  Main = lazy(() => import(`./${view}/Main/Main`));
  Project = lazy(() => import(`./${view}/Project/Project`));
  ContactForm = lazy(() => import(`./${view}/ContactForm/ContactForm`));
}
setViewComponents();

const App = () => {
  const [currentView, setCurrentView] = useState(determineView());
  const [overlayOpen, setOverlayOpen] = useState(false);
  const value = {overlayOpen, setOverlayOpen};
  
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (currentView !== determineView()) {
        view = determineView();
        setViewComponents();
        setCurrentView(determineView());
      }
    });
  }, [currentView]);

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