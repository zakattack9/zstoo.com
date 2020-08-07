import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Main from './Components/Main';
import Project from './Components/Project/Project';
import ContactForm from './Components/ContactForm/ContactForm';
import Overlay from './Components/Overlay/Overlay';
import './index.scss';

const App = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact>
            <Main />
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
          <Route path="/overlay">
            <Overlay />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
