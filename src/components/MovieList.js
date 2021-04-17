import React from 'react';
import MovieCard from './MovieCard';
import Grid from '@material-ui/core/Grid';

const MovieList = ({ movieItems }) => {
  return (
    <div>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
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
      </Grid>
    </div>
  );
};

export default MovieList;
