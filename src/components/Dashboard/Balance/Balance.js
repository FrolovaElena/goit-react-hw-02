import React from 'react';
import propTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ currentBalance, incomes, expenses }) => (
  <section className={styles.balance}>
    <span>+{incomes}$</span>
    <span>-{expenses}$</span>
    <span>Balance: {currentBalance}$</span>
  </section>
);

Balance.propTypes = {
  currentBalance: propTypes.number.isRequired,
  incomes: propTypes.number.isRequired,
  expenses: propTypes.number.isRequired,
};

export default Balance;
