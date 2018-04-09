import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  padding: 5px;
  border: none;
  font-size: 16px;
  text-align: center;
`;

const InputApp = props => (
  <Input
    type="text"
    value={props.value}
    onChange={event => props.onChange(event.target.value, props.name)}
    placeholder={props.placeholder}
  />
);

InputApp.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputApp;
