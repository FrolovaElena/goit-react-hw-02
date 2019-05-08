import React from 'react';
import propTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ index, length, onIncrement, onDecrement }) => (
  <section className={styles.controls}>
    <button
      type="button"
      onClick={onDecrement}
      className={styles.button}
      disabled={index <= 0}
    >
      Назад
    </button>
    <button
      type="button"
      onClick={onIncrement}
      className={styles.button}
      disabled={index > length - 2}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  index: propTypes.number.isRequired,
  length: propTypes.number.isRequired,
  onIncrement: propTypes.func.isRequired,
  onDecrement: propTypes.func.isRequired,
};

export default Controls;
