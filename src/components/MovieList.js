import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movieItems }) => {
  return (
    <div>
      {movieItems.map((movie, index) => (
        <MovieCard
          key={index}
          date={movie.date}
          title={movie.title}
          genre={movie.genre}
          average={movie.vote_average}
          poster={movie.poster_url}
        />
      ))}
    </div>
  );
};

export default MovieList;
