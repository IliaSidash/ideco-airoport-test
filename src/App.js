import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { set, cloneDeep } from 'lodash/fp';

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

const resetSort = (board) => {
  if (board === 'depart') {
    return cloneDeep(depart);
  }
  if (board === 'arrival') {
    return cloneDeep(arrival);
  }
  return null;
};

class App extends Component {
  state = {
    depart: cloneDeep(depart),
    arrival: cloneDeep(arrival),
    sorted: {
      depart: false,
      arrival: false,
    },
  };

  handleSort = (board) => {
    if (!this.state.sorted[board]) {
      this.setState(prevState => ({
        [board]: sortFlights(prevState[board]),
        sorted: set(`${board}`, !prevState.sorted[board], prevState.sorted),
      }));
    }
    if (this.state.sorted[board]) {
      this.setState(prevState => ({
        [board]: resetSort(board),
        sorted: set(`${board}`, !prevState.sorted[board], prevState.sorted),
      }));
    }
  };

  render() {
    const { depart, arrival } = this.state;
    return (
      <Router>
        <Fragment>
          <Route
            exact
            path="/"
            render={props => (
              <Main flights={depart} board="depart" onHandleSort={this.handleSort} {...props} />
            )}
          />
          <Route
            exact
            path="/arrival"
            render={props => (
              <Main flights={arrival} board="arrival" onHandleSort={this.handleSort} {...props} />
            )}
          />
        </Fragment>
      </Router>
    );
  }
}

export default App;
