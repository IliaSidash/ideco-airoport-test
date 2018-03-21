import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

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

const airoports = {
  SVX: 'Екатеринбург',
  LCA: 'Ларнака',
  MOW: 'Москва',
  BCN: 'Барселона',
};

const status = {
  delayed: 'Задержка',
  arrived: 'Прибыл',
  departed: 'Вылетел',
  boarding: 'Посадка',
};

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
    <Table>
      <TableRow>
        {headers.map(header => <TableHeader key={header.id}>{header.text}</TableHeader>)}
      </TableRow>
      {flights.map(flight => (
        <TableRow key={flight.id}>
          <TableCol>{flight.number}</TableCol>
          <TableCol>{airoports[flight.airoport]}</TableCol>
          <TableCol>{flight.aircraft}</TableCol>
          <TableCol>{formateDate(flight.departTime)}</TableCol>
          <TableCol>{formateTime(flight.departTime)}</TableCol>
          <TableCol>{status[flight.status]}</TableCol>
        </TableRow>
      ))}
    </Table>
  </Grid>
);

export default Scoreboard;
