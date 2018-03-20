import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Clock from 'react-live-clock';

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

const Button = styled.button`
  display: block;
  margin-left: auto;
  :hover {
    cursor: pointer;
  }
`;

const headers = [
  {
    id: 1,
    text: 'Номер рейса',
  },
  {
    id: 2,
    text: 'Город',
  },
  {
    id: 3,
    text: 'Тип самолета',
  },
  {
    id: 4,
    text: 'Фактическое время',
  },
  {
    id: 5,
    text: 'Время',
  },
  {
    id: 6,
    text: 'Статус',
  },
];

const Scoreboard = ({ flights, onHandleClick }) => (
  <Grid>
    <Row middle="xs">
      <Col lg={10}>
        <Title> Информационное табло </Title>
      </Col>
      <Col lg={2}>
        <Counter count={flights.length} />
      </Col>
    </Row>
    <Button onClick={onHandleClick}>Сортировать</Button>
    <Table>
      <TableRow>
        {headers.map(header => <TableHeader key={header.id}>{header.text}</TableHeader>)}
      </TableRow>
      {flights.map(flight => (
        <TableRow key={flight.id}>
          <TableCol>{flight.number}</TableCol>
          <TableCol>{flight.airoport}</TableCol>
          <TableCol>{flight.aircraft}</TableCol>
          <TableCol>
            <Clock format="HH:mm:ss" ticking timezone="Asia/Yekaterinburg" />
          </TableCol>
          <TableCol>{flight.departTime}</TableCol>
          <TableCol>{flight.status}</TableCol>
        </TableRow>
      ))}
    </Table>
  </Grid>
);

export default Scoreboard;
