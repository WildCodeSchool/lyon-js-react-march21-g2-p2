import Grid from '@material-ui/core/Grid';
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movieList, imgUrl }) => {
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        style={{ marginTop: '1em' }}
      >
        {movieList.map(
          ({
            id,
            release_date,
            vote_average,
            genre_ids,
            title,
            poster_path,
            overview,
          }) => (
            <MovieCard
              key={id}
              id={id}
              date={release_date}
              title={title}
              genre={genre_ids}
              average={vote_average}
              poster={poster_path ? imgUrl + poster_path : null}
              synopsis={overview}
            />
          )
        )}
      </Grid>
    </>
  );
};

export default MovieList;
