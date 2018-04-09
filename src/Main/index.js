import React from 'react';
import { Grid } from 'react-flexbox-grid';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Scoreboard from './Scoreboard';

const LinkTo = styled(Link)`
  margin-right: 10px;
  color: green;
`;

const Main = ({ flights, onHandleSort, board }) => (
  <div>
    <Grid>
      <LinkTo
        exact
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}
        href="/"
        to="/"
      >
        Табло вылета
      </LinkTo>
      <LinkTo
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}
        href="/"
        to="/arrival"
      >
        Табло прилета
      </LinkTo>
    </Grid>
    <Scoreboard flights={flights} onHandleClick={() => onHandleSort(board)} />
  </div>
);

Main.propTypes = {
  flights: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    number: PropTypes.number,
    airoport: PropTypes.string,
    aircraft: PropTypes.string,
    time: PropTypes.number,
    departTime: PropTypes.number,
    status: PropTypes.status,
  })).isRequired,
  onHandleSort: PropTypes.func.isRequired,
  board: PropTypes.string.isRequired,
};

export default Main;
