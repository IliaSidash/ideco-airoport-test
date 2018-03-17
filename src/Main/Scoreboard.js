import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Counter from './Counter';

const Title = styled.h1`
  text-align: center;
`;

const Table = styled.table``;

const TableRow = styled.tr``;

const TableCol = styled.td`
  text-align: center;
`;

const TableHeader = styled.th`
  font-weight: bold;
  text-align: center;
  width: calc(100% / 7);
`;

const Scoreboard = ({ data }) => (
  <Grid>
    <Row middle="xs">
      <Col lg={10}>
        <Title> Информационное табло </Title>
      </Col>
      <Col lg={2}>
        <Counter count={data.flights.length} />
      </Col>
    </Row>
    <Table>
      <TableRow>
        {data.headers.map(header => <TableHeader key={header.id}>{header.text}</TableHeader>)}
      </TableRow>
      {data.flights.map(flight => (
        <TableRow key={flight.id}>
          <TableCol>{flight.number}</TableCol>
          <TableCol>{flight.airoport}</TableCol>
          <TableCol>{flight.aircraft}</TableCol>
          <TableCol>{flight.time}</TableCol>
          <TableCol>{flight.departTime}</TableCol>
          <TableCol>{flight.status}</TableCol>
        </TableRow>
      ))}
    </Table>
  </Grid>
);

export default Scoreboard;
