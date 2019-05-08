import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Reader from './components/Reader/Reader';
import publicationsItems from './assets/publications.json';
import MoviePage from './components/MoviePage/MoviePage';
import movies from './assets/movie.json';
import transactions from './assets/transactions.json';
import Dashboard from './components/Dashboard/Dashboard';

ReactDOM.render(
  <Fragment>
    <Reader items={publicationsItems} />
    <MoviePage items={movies} />
    <Dashboard items={transactions} />
  </Fragment>,
  document.getElementById('root'),
);
