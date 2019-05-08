import React from 'react';
import propTypes from 'prop-types';
import styles from './MovieGridItem.module.css';

const MovieGridItem = ({ title, posterUrl, overview, alt }) => (
  <div className={styles.movieCard}>
    <img src={posterUrl} alt={alt} />
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.descr}>{overview}</p>
    </div>
  </div>
);

MovieGridItem.propTypes = {
  title: propTypes.string.isRequired,
  posterUrl: propTypes.string.isRequired,
  overview: propTypes.string.isRequired,
  alt: propTypes.string,
};

MovieGridItem.defaultProps = {
  alt: '',
};

export default MovieGridItem;
