import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import Scoreboard from './Scoreboard';

const LinkTo = styled(Link)`
  margin-right: 10px;
  color: green;
`;

const Main = ({ flights, onHandleSort }) => (
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
    <Scoreboard flights={flights} onHandleClick={onHandleSort} />
  </div>
);

export default Main;
