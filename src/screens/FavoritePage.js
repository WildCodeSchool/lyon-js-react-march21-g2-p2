import './FavoritePage.css';
import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import MovieList from '../components/MovieList';




//---------------------fonction pour afficher les films dans la section favorite page---//


const FavoritePage = () => {
  const [favoriteMovieById] = useLocalStorage("isFavoriteMovie",
  {});
  const favoriteMovies = Object.keys(favoriteMovieById
  )
  .filter(id => favoriteMovieById[id] !==false)
  .map(id=> favoriteMovieById[id])
  console.log(favoriteMovieById)
 
  return (
    <>
      <h1>Here is a list of the favorite movies</h1>
      <span className="mr-2">Here is the favourite movies</span>
      <MovieList movieList={favoriteMovies} imgUrl={'https://image.tmdb.org/t/p/w200'}/>
      

      
    </>
  );
};

export default FavoritePage;
