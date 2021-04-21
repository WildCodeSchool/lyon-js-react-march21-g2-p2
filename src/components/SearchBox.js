import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import { useState, useEffect } from 'react';
import axios from 'axios';

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

const apiUrl = 'https://api.themoviedb.org/3';
const apiPopularRoute = '/movie/popular?';
const apiKey = 'api_key=f22eb05a70b166bd4e2c1312e15d8e8b';

const SearchBox = ({ searchValue, setSearchValue }) => {
  const [movieList, setMovieList] = useState([]);

  // Get the movies & all the genres available in TMDB
  useEffect(() => {
    axios
      .get(apiUrl + apiPopularRoute + apiKey)
      .then(({ data }) => setMovieList(data.results));
  }, []);

  const { root, input, iconButton } = useStyles();

  return (
    <>
      <Paper
        component="form"
        className={root}
        onSubmit={(e) => e.preventDefault()}
      >
        <InputBase
          type="text"
          className={input}
          value={searchValue}
          placeholder="Search for a movie"
          inputProps={{ 'aria-label': 'Search for a movie' }}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <IconButton type="submit" className={iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};
export default SearchBox;
