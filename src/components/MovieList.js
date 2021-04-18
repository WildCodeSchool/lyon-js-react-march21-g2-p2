import React from 'react';
import MovieCard from './MovieCard';
import Grid from '@material-ui/core/Grid';

const MovieList = (props) => {
  return (
    <div>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {props.movieItems.map((movie) => (
          <MovieCard
            key={movie.id}
            date={movie.release_date}
            title={movie.title}
            genre={movie.genre_ids}
            average={movie.vote_average}
            // poster={movie.poster_url}
          />
        ))}
      </Grid>
    </div>
  );
};

export default MovieList;
