import React from 'react';
import FavoriteList from '../components/FavoriteList';
import createPersistedState from 'use-persisted-state';
import './FavoritePage.css';
// Component to display the favorite movies

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    margin: 0,
    width: '100%',
  },
}));

export default function FavoritePage() {
  const { container } = useStyles();
  const useFavoriteMoviesState = createPersistedState('favoriteMovies');
  const [favoriteMovies] = useFavoriteMoviesState({});

  const favoriteMovieList = Object.keys(favoriteMovies)
    .filter((id) => favoriteMovies[id] !== false)
    .map((id) => favoriteMovies[id]);

  console.log(favoriteMovieList);

  return (
    <div className={container}>
      <h2>Favorite movies</h2>
      <FavoriteList
        movieList={favoriteMovieList}
        imgUrl={'https://image.tmdb.org/t/p/w200'}
      />
    </div>
  );
}
