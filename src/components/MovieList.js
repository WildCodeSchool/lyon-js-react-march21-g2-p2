import React from 'react';
import MovieCard from './MovieCard';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

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
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search for a movie"
            inputProps={{ 'aria-label': 'Search for a movie' }}
          />
          <IconButton
            type="text"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
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
    </>
  );
};

export default MovieList;
