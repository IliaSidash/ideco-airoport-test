import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ count }) => <div>Количество рейсов: {count}</div>;

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Counter;
