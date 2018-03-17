import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import Scoreboard from './Scoreboard';

const LinkTo = styled(Link)`
  margin-right: 10px;
  color: green;
`;

const Main = ({ data }) => (
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
    <Scoreboard data={data} />
  </div>
);

export default Main;
