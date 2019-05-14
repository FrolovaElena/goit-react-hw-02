import React from 'react';
import propTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ current, total, onIncrement, onDecrement }) => (
  <section className={styles.controls}>
    <button
      type="button"
      onClick={onDecrement}
      className={styles.button}
      disabled={current === 1}
    >
      Назад
    </button>
    <button
      type="button"
      onClick={onIncrement}
      className={styles.button}
      disabled={current === total}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  current: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  onIncrement: propTypes.func.isRequired,
  onDecrement: propTypes.func.isRequired,
};

export default Controls;
