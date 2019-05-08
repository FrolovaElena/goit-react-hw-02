import React from 'react';
import propTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.history}>
    <thead>
      <tr>
        <th className={styles.head}>Transaction</th>
        <th className={styles.head}>Amount</th>
        <th className={styles.head}>Date</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <td className={styles.row}>{item.type}</td>
          <td className={styles.row}>{item.amount}$</td>
          <td className={styles.row}>{item.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.number.isRequired,
      date: propTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;
