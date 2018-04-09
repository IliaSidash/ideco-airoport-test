import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import PropTypes from 'prop-types';

import Counter from './Counter';
import { TableRow, TableCol, TableHeader, Button } from './Table/';

const Title = styled.h1`
  text-align: center;
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
    text: 'Время',
  },
  {
    id: 5,
    text: 'Фактическое время',
  },
  {
    id: 6,
    text: 'Статус',
  },
];

const formateDate = milliseconds => format(milliseconds, 'DD MMMM, HH:mm', { locale: ru });
const formateTime = milliseconds => format(milliseconds, 'HH:mm');

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
    <TableRow>
      {headers.map(header => <TableHeader key={header.id}>{header.text}</TableHeader>)}
    </TableRow>
    {flights.map(flight => (
      <TableRow key={flight.id}>
        <TableCol>{flight.number}</TableCol>
        <TableCol>{flight.airoport}</TableCol>
        <TableCol>{flight.aircraft}</TableCol>
        <TableCol>{formateDate(flight.departTime)}</TableCol>
        <TableCol>{formateTime(flight.departTime)}</TableCol>
        <TableCol>{flight.status}</TableCol>
      </TableRow>
    ))}
  </Grid>
);

Scoreboard.propTypes = {
  flights: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    number: PropTypes.number,
    airoport: PropTypes.string,
    aircraft: PropTypes.string,
    time: PropTypes.number,
    departTime: PropTypes.number,
    status: PropTypes.status,
  })).isRequired,
  onHandleClick: PropTypes.func.isRequired,
};

export default Scoreboard;
