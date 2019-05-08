import React from 'react';
import propTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ title, text }) => (
  <section className={styles.publication}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.text}>{text}</p>
  </section>
);

Publication.propTypes = {
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default Publication;
