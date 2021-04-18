import React from 'react';
import MovieCard from './MovieCard';
import Grid from '@material-ui/core/Grid';

const MovieList = (props) => {
  const moviePoster = (movieId) => {
    const movieSrc = 'https://image.tmdb.org/t/p/w200';

    const selectedMovie = props.movieItems.filter(
      (movie) => movie.id === parseInt(movieId)
    );
    const newMovie = selectedMovie[0];
    const newMoviePath = newMovie.poster_path;
    let movieLink = movieSrc + newMoviePath;

    return movieLink;
  };

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
            id={movie.id}
            date={movie.release_date}
            title={movie.title}
            genre={movie.genre_ids}
            average={movie.vote_average}
            poster={moviePoster(movie.id)}
          />
        ))}
      </Grid>
    </div>
  );
};

export default MovieList;
