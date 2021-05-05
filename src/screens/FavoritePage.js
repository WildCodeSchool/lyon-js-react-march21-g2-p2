import React from 'react';
import MovieList from '../components/MovieList';
import createPersistedState from 'use-persisted-state';

// Component to display the favorite movies
const FavoritePage = () => {
  const useFavoriteMoviesState = createPersistedState('favoriteMovies');
  const [favoriteMovies] = useFavoriteMoviesState({});
  const imgUrl = `${process.env.REACT_APP_API_IMAGE_URL}/w200`;
  const favoriteMovieList = Object.keys(favoriteMovies)
    .filter((id) => favoriteMovies[id] !== false)
    .map((id) => favoriteMovies[id]);

  return (
    <>
      <h2>Favorite movies</h2>
      <MovieList movieList={favoriteMovieList} imgUrl={imgUrl} />
    </>
  );
};

export default FavoritePage;
