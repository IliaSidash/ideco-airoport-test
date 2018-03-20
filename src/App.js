import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main';
import { depart, arrival } from './Main/data';

const sortFlights = flights =>
  flights.sort((first, second) => {
    if (first.airoport < second.airoport) {
      return -1;
    }
    if (first.airoport > second.airoport) {
      return 1;
    }
    return 0;
  });

class App extends Component {
  state = {
    depart,
    arrival,
  };

  handleSort = () => {
    this.setState(prevState => ({ depart: sortFlights(prevState.depart) }));
  };

  render() {
    const { depart, arrival } = this.state;
    return (
      <Router>
        <Fragment>
          <Route
            exact
            path="/"
            render={props => <Main flights={depart} onHandleSort={this.handleSort} {...props} />}
          />
          <Route
            exact
            path="/arrival"
            render={props => <Main flights={arrival} onHandleSort={this.handleSort} {...props} />}
          />
        </Fragment>
      </Router>
    );
  }
}

export default App;
