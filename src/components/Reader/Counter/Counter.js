import React from 'react';
import propTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ current, total }) => (
  <p className={styles.counter}>
    {current}/{total}
  </p>
);

Counter.propTypes = {
  current: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
};

export default Counter;
