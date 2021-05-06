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
  title: {
    marginTop: 10,
    marginBottom: 50,
  },
}));

export default function FavoritePage() {
  const { container, title } = useStyles();
  const useFavoriteMoviesState = createPersistedState('favoriteMovies');
  const [favoriteMovies] = useFavoriteMoviesState({});
  const imgUrl = `${process.env.REACT_APP_API_IMAGE_URL}/w1280`;
  const favoriteMovieList = Object.keys(favoriteMovies)
    .filter((id) => favoriteMovies[id] !== false)
    .map((id) => favoriteMovies[id]);

  return (
    <>
      <h2>Favorite movies</h2>
      <MovieList
        movieList={favoriteMovieList}
        imgUrl={'https://image.tmdb.org/t/p/w200'}
      />
      {favoriteMovieList.length === 0 ? (
        <h3 className={classes.favoritesSection}>
          You don’t have any favorites yet ¯\_(ツ)_/¯
        </h3>
      ) : (
        <></>
      )}
    </>
  );
}
