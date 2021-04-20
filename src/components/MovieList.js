import React from 'react';
import MovieCard from './MovieCard';
import Grid from '@material-ui/core/Grid';

const MovieList = (props) => {
  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {props.movieItems.map((movie) => (
          <MovieCard
            id={movie.id}
            date={movie.release_date}
            title={movie.title}
            genre={movie.genre_ids}
            average={movie.vote_average}
            poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          />
        ))}
      </Grid>
    </>
  );
};

export default MovieList;
