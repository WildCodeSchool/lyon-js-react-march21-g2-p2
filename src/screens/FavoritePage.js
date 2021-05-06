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

  empty: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default function FavoritePage() {
  const { container, title, empty} = useStyles();
  const useFavoriteMoviesState = createPersistedState('favoriteMovies');
  const [favoriteMovies] = useFavoriteMoviesState({});
  const imgUrl = `${process.env.REACT_APP_API_IMAGE_URL}/w1280`;
  const favoriteMovieList = Object.keys(favoriteMovies)
    .filter((id) => favoriteMovies[id] !== false)
    .map((id) => favoriteMovies[id]);

  return (
    <>
     <div className={container}>
      <h2 className={title}>Favorite movies</h2>
      <FavoriteList movieList={favoriteMovieList} imgUrl={imgUrl} />
      {favoriteMovieList.length === 0 ? (
        <h3 className={empty}>
          You don’t have any favorites yet ¯\_(ツ)_/¯
        </h3>
      ) : (
        <></>
        )}
      </div>
    </>
  );
}
