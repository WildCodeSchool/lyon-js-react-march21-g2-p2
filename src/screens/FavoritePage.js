import React from 'react';
import FavoriteList from '../components/FavoriteList';
import createPersistedState from 'use-persisted-state';
// Component to display the favorite movies

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    width: '100%',
    height: '100%',
  },
}));

const sourceImg = process.env.REACT_APP_API_IMAGE_URL;

export default function FavoritePage() {
  const { container } = useStyles();
  const useFavoriteMoviesState = createPersistedState('favoriteMovies');
  const [favoriteMovies] = useFavoriteMoviesState({});

  const favoriteMovieList = Object.keys(favoriteMovies)
    .filter((id) => favoriteMovies[id] !== false)
    .map((id) => favoriteMovies[id]);

  return (
    <div className={container}>
      <h2>Favorite movies</h2>
      <FavoriteList
        movieList={favoriteMovieList}
        imgUrl={sourceImg + '/w1280'}
      />
    </div>
  );
}
