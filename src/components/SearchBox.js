import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import { useState } from 'react';

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

const SearchBox = () => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState(''); // to put in future in MoviePage

  return (
    <>
      <Paper component="form" className={classes.root}>
        <InputBase
          type="text"
          className={classes.input}
          //value={value}
          placeholder="Search for a movie"
          inputProps={{ 'aria-label': 'Search for a movie' }}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};
export default SearchBox;
