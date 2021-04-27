import React from 'react';
import MovieCard from './MovieCard';
import Grid from '@material-ui/core/Grid';

const MovieList = ({ movieList, imgUrl }) => {
  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {movieList.map(
          ({
            id,
            release_date,
            vote_average,
            genre_ids,
            title,
            poster_path,
          }) => (
            <MovieCard
              key={id}
              id={id}
              date={release_date}
              title={title}
              genre={genre_ids}
              average={vote_average}
              poster={imgUrl + poster_path}
            />
          )
        )}
      </Grid>
    </>
  );
};

export default MovieList;
