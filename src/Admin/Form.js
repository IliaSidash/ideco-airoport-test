import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Input from './Input';
import { TableCol } from '../Main/Table/';

const Form = styled.form`
  display: flex;
`;

const AdminCol = TableCol.extend`
  width: calc(100% / 7 - 10px);
`;

class FormApp extends React.Component {
  state = {
    number: '',
    airoport: '',
    aircraft: '',
    time: '',
    departTime: '',
    status: '',
  };

  handleChange = (value, name) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      number, airoport, aircraft, time, departTime, status,
    } = this.state;

    this.props.onAdd({
      number,
      airoport,
      aircraft,
      time,
      departTime,
      status,
    });
  };

  render() {
    const {
      number, airoport, aircraft, time, departTime, status,
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <AdminCol>
          <Input
            name="number"
            value={number}
            onChange={this.handleChange}
            placeholder="Номер рейса"
          />
        </AdminCol>
        <AdminCol>
          <Input
            name="airoport"
            value={airoport}
            onChange={this.handleChange}
            placeholder="Аэропорт"
          />
        </AdminCol>
        <AdminCol>
          <Input
            name="aircraft"
            value={aircraft}
            onChange={this.handleChange}
            placeholder="Тип самолета"
          />
        </AdminCol>
        <AdminCol>
          <Input name="time" value={time} onChange={this.handleChange} placeholder="Время" />
        </AdminCol>
        <AdminCol>
          <Input
            name="departTime"
            value={departTime}
            onChange={this.handleChange}
            placeholder="Время вылета"
          />
        </AdminCol>
        <AdminCol>
          <Input name="status" value={status} onChange={this.handleChange} placeholder="Статус" />
        </AdminCol>
        <AdminCol>
          <button type="submit">Add</button>
        </AdminCol>
      </Form>
    );
  }
}

FormApp.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default FormApp;
