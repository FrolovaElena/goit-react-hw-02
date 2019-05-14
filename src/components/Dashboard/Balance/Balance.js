import React from 'react';
import propTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ incomes, expenses }) => (
  <section className={styles.balance}>
    <span>+{incomes}$</span>
    <span>-{expenses}$</span>
    <span>Balance: {incomes - expenses}$</span>
  </section>
);

Balance.propTypes = {
  incomes: propTypes.number.isRequired,
  expenses: propTypes.number.isRequired,
};

export default Balance;
