import React from 'react';
import propTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ index, length }) => (
  <p className={styles.counter}>
    {index + 1}/{length}
  </p>
);

Counter.propTypes = {
  index: propTypes.number.isRequired,
  length: propTypes.number.isRequired,
};

export default Counter;
