import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { OverlayContext } from './Utils/OverlayContext';
import Loader from './Components/Loader/Loader';
import './index.scss';

const Main = lazy(() => import('./Components/Main/Main'));
const Overlay = lazy(() => import('./Components/Overlay/Overlay'));
const Project = lazy(() => import('./Components/Project/Mobile/Project'));
const ContactForm = lazy(() => import('./Components/ContactForm/ContactForm'));
const Error404 = lazy(() => import('./Components/Error404/Error404'));

const App = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const value = {overlayOpen, setOverlayOpen};

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