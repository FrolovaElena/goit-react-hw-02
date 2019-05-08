import React, { Component } from 'react';
import styles from './MoviePage.module.css';
import MovieGrid from './MovieGrid/MovieGrid';
import SearchBar from './SearchBar/SearchBar';
import movies from '../../assets/movie.json';

const filterMovies = (filter, items) => {
  return items.filter(item =>
    item.title.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class MoviePage extends Component {
  state = {
    filter: '',
  };

  onFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter } = this.state;
    const filteredMovies = filterMovies(filter, movies);
    return (
      <div className={styles.container}>
        <SearchBar value={filter} onChange={this.onFilterChange} />
        {filteredMovies.length === 0 ? (
          <p>No matching results!</p>
        ) : (
          <MovieGrid items={filteredMovies} />
        )}
      </div>
    );
  }
}
