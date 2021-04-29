import './FavoritePage.css';
import React from 'react';
import MovieList from '../components/MovieList';
import createPersistedState from 'use-persisted-state';

// ---------------------fonction pour afficher les films dans la section favorite page---//

const FavoritePage = () => {
  const useFavoriteMoviesState = createPersistedState('favoriteMovies');
  const [favoriteMovies] = useFavoriteMoviesState({});

  const favoriteMovieList = Object.keys(favoriteMovies)
    .filter((id) => favoriteMovies[id] !== false)
    .map((id) => favoriteMovies[id]);
  console.log(favoriteMovies);
  return (
    <>
      <h2>Here is a list of the favorite movies</h2>
      <h3 className="mr-2">Here is the favourite movies</h3>
      <MovieList
        movieList={favoriteMovieList}
        imgUrl={'https://image.tmdb.org/t/p/w200'}
      />
    </>
  );
};

export default FavoritePage;
