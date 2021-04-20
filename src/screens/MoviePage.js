/*MoviePage function which will call MovieList rendering in MovieCard*/

/*component import*/
import { useEffect, useState } from 'react';
import axios from 'axios';
import './MoviePage.css';
import MovieList from '../components/MovieList';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

//style of the Search input
const useStyles = makeStyles((theme) => ({
  root: {
    width: '30ch',
  },
  input: {
    marginLeft: theme.spacing(2),
  },
  iconButton: {
    padding: 10,
  },
}));

export default function MoviePage() {
  const classes = useStyles();
  const [popularMovie, setPopularMovie] = useState([]);

  //state for the SearchResults
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios

      .get(
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f22eb05a70b166bd4e2c1312e15d8e8b'
      )

      .then((response) => response.data)

      .then((data) => {
        const mostPopularMovies = data.results;
        const moviesToShow = [];

        for (let i = 0; i <= 9; i += 1) {
          moviesToShow.push(mostPopularMovies[i]);
        }
        return setPopularMovie(moviesToShow);
      });
  }, []);

  return (
    <>
      <h1>Here is the list of all movies</h1>
      <Paper component="form" className={classes.root}>
        <InputBase
          type="text"
          className={classes.input}
          placeholder="Search for a movie"
          inputProps={{ 'aria-label': 'Search for a movie' }}
          onChange={(e) => setSearchResults(e.target.value)}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      <MovieList movieItems={popularMovie} />
    </>
  );
}
