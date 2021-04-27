import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

//style of the Search input
const useStyles = makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(2),
  },
  iconButton: {
    padding: 10,
  },
}));

const SearchBox = ({ query, setQuery }) => {
  const { root, input, iconButton } = useStyles();

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Paper component="form" className={root} onSubmit={handleSubmit}>
        <InputBase
          type="text"
          className={input}
          value={query}
          placeholder="Search for a movie"
          inputProps={{ 'aria-label': 'Search for a movie' }}
          onChange={(e) => setQuery(e.target.value)}
        />
        <IconButton type="submit" className={iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};
export default SearchBox;
