import React from 'react';
import propTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ massage }) => (
  <div className={styles.notification}>
    <p>{massage}</p>
  </div>
);

Notification.propTypes = {
  massage: propTypes.string,
};

Notification.defaultProps = {
  massage: '',
};

export default Notification;
