import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import styles from './MovieGrid.module.css';
import MovieGridItem from '../MovieGridItem/MovieGridItem';

const MovieGrid = ({ items }) => (
  <div className={styles.movieGrid}>
    {items.map(item => (
      <Fragment key={item.id}>
        <MovieGridItem {...item} />
      </Fragment>
    ))}
  </div>
);

MovieGrid.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({ id: propTypes.number.isRequired }).isRequired,
  ).isRequired,
};

export default MovieGrid;
