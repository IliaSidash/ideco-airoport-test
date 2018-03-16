import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

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

const headers = [
  {
    id: 1,
    text: 'Номер рейса',
  },
  {
    id: 2,
    text: 'Город вылета',
  },
  {
    id: 3,
    text: 'Город прилета',
  },
  {
    id: 4,
    text: 'Тип самолета',
  },
  {
    id: 5,
    text: 'Время',
  },
  {
    id: 6,
    text: 'Фактическое время',
  },
  {
    id: 7,
    text: 'Статус',
  },
];

const flights = [
  {
    id: 1,
    number: 123,
    airoportDepart: 'VKO',
    airoportArrival: 'BCN',
    aircraft: 'AIRBUS A320',
    time: 1521193476000,
    departTime: 1521207876000,
    status: 'arrived',
  },
];

const Scoreboard = () => {
  return (
    <Grid>
      <Title> Информационное табло </Title>
      <Table>
        <TableRow>
          {headers.map(header => <TableHeader key={header.id}>{header.text}</TableHeader>)}
        </TableRow>
        {flights.map(flight => (
          <TableRow>
            <TableCol> {flight.number}</TableCol>
            <TableCol> {flight.airoportDepart}</TableCol>
            <TableCol> {flight.airoportArrival}</TableCol>
            <TableCol> {flight.aircraft}</TableCol>
            <TableCol> {flight.time}</TableCol>
            <TableCol> {flight.departTime}</TableCol>
            <TableCol> {flight.status}</TableCol>
          </TableRow>
        ))}
      </Table>
    </Grid>
  );
};

export default Scoreboard;
