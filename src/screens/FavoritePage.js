import React from 'react';
import FavoriteList from '../components/FavoriteList';
import createPersistedState from 'use-persisted-state';
import './FavoritePage.css';
// Component to display the favorite movies
const FavoritePage = () => {
  const useFavoriteMoviesState = createPersistedState('favoriteMovies');
  const [favoriteMovies] = useFavoriteMoviesState({});

  const favoriteMovieList = Object.keys(favoriteMovies)
    .filter((id) => favoriteMovies[id] !== false)
    .map((id) => favoriteMovies[id]);

  return (
    <>
      <h2>Favorite movies</h2>
      <div className="container">
        <FavoriteList
          movieList={favoriteMovieList}
          imgUrl={'https://image.tmdb.org/t/p/w200'}
        />
      </div>
    </>
  );
};

export default FavoritePage;
