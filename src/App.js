import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main';
import { depart, arrival } from './Main/data';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" render={props => <Main data={depart} {...props} />} />
          <Route exact path="/arrival" render={props => <Main data={arrival} {...props} />} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
