import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Main from './Main';
import Admin from './Admin';

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
    depart: [],
    arrival: [],
  };

  componentDidMount() {
    axios
      .get('api/depart')
      .then(res => res.data)
      .then(depart =>
        this.setState({
          depart,
        }));
    axios
      .get('api/arrival')
      .then(res => res.data)
      .then(arrival =>
        this.setState({
          arrival,
        }));
  }

  handleSort = (board) => {
    this.setState(prevState => ({
      [board]: sortFlights(prevState[board]),
    }));
  };

  handleAdd = (board, flights) => {
    axios
      .post(`/api/${board}`, { flights })
      .then(response => response.data)
      .then((flight) => {
        this.setState({ [board]: [...this.state[board], flight] });
      })
      .catch(error => console.log(error));
  };

  handleDelete = (board, id) => {
    axios.delete(`/api/${board}/${id}`).then(() => {
      this.setState(prevState => ({
        [board]: prevState[board].filter(el => el.id !== id),
      }));
    });
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
          <Route
            exact
            path="/admin"
            render={props => (
              <Admin
                arrival={arrival}
                depart={depart}
                onDelete={this.handleDelete}
                onAdd={this.handleAdd}
                {...props}
              />
            )}
          />
        </Fragment>
      </Router>
    );
  }
}

export default App;
