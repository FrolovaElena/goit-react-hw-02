import React from 'react';
import propTypes from 'prop-types';
import styles from './SearchBar.module.css';

const SearchBar = ({ value, onChange }) => (
  <input
    type="text"
    className={styles.input}
    value={value}
    onChange={onChange}
  />
);

SearchBar.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default SearchBar;
