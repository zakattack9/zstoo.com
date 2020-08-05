import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Components/Main';
import Project from './Components/Project/Project';
import ContactForm from './Components/ContactForm/ContactForm';
import './index.scss';

const App = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/contact">
            <ContactForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
