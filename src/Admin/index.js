import React from 'react';
import { Grid } from 'react-flexbox-grid';
import PropTypes from 'prop-types';

import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

import { TableRow, TableCol, TableHeader } from '../Main/Table/';
import Form from './Form';

const formateDate = milliseconds => format(milliseconds, 'DD MMMM, HH:mm', { locale: ru });
const formateTime = milliseconds => format(milliseconds, 'HH:mm');

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

class Admin extends React.Component {
  state = {
    depart: true,
  };

  getDirection = () => {
    if (this.state.depart) {
      return this.props.depart;
    }

    return this.props.arrival;
  };

  getBoard = () => {
    if (this.state.depart) {
      return 'depart';
    }

    return 'arrival';
  };

  handleChangeBoard = () => {
    this.setState(prevState => ({
      depart: !prevState.depart,
      arrival: !prevState.arrival,
    }));
  };

  handleChange = (value, name) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Grid>
        <button onClick={this.handleChangeBoard}>
          {this.state.depart ? 'Прибытие' : 'Отправление'}
        </button>
        <TableRow>
          {headers.map(header => <TableHeader key={header.id}>{header.text}</TableHeader>)}
        </TableRow>
        {this.getDirection().map(flight => (
          <TableRow key={flight.id}>
            <TableCol>{flight.number}</TableCol>
            <TableCol>{flight.airoport}</TableCol>
            <TableCol>{flight.aircraft}</TableCol>
            <TableCol>{formateDate(flight.departTime)}</TableCol>
            <TableCol>{formateTime(flight.departTime)}</TableCol>
            <TableCol>{flight.status}</TableCol>
            <TableCol>
              <button onClick={this.openModal}>Edit</button>
              <button onClick={() => this.props.onDelete(this.getBoard(), flight.id)}>Del</button>
            </TableCol>
          </TableRow>
        ))}
        <Form onAdd={flights => this.props.onAdd(this.getBoard(), flights)} />
      </Grid>
    );
  }
}

Admin.propTypes = {
  depart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    number: PropTypes.number,
    airoport: PropTypes.string,
    aircraft: PropTypes.string,
    time: PropTypes.number,
    departTime: PropTypes.number,
    status: PropTypes.status,
  })).isRequired,
  arrival: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    number: PropTypes.number,
    airoport: PropTypes.string,
    aircraft: PropTypes.string,
    time: PropTypes.number,
    departTime: PropTypes.number,
    status: PropTypes.status,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default Admin;
