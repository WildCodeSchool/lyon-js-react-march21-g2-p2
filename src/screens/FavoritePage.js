import React from 'react';
import MovieList from '../components/MovieList';
import createPersistedState from 'use-persisted-state';
import { makeStyles } from '@material-ui/core/styles';


// Component to display the favorite movies
const useStyles = makeStyles((theme) => ({
  favoritesSection: {
    display: 'flex',
    marginTop: 45,
  },
}));
const FavoritePage = () => {
  const classes = useStyles();
  const useFavoriteMoviesState = createPersistedState('favoriteMovies');
  const [favoriteMovies] = useFavoriteMoviesState({});

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
          You don’t have any favorites yet   ¯\_(ツ)_/¯  
        </h3>
      ) : (
        <></>
      )}
    </>
  );
};

export default FavoritePage;
