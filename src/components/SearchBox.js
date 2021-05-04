import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Controller } from 'react-hook-form';
import InputBase from '@material-ui/core/InputBase';

//style of the Search input
const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    margin: theme.spacing(2),
    height: theme.spacing(4),
  },
  input: {
    marginLeft: theme.spacing(2),
    height: theme.spacing(4),
  },
  iconButton: {
    padding: 2,
  },
}));

const SearchBox = ({ control, year, with_genres }) => {
  const { root, input, iconButton } = useStyles();

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Paper component="form" className={root} onSubmit={handleSubmit}>
      <Controller
        name="query"
        control={control}
        render={({ field }) => {
          return (
            <InputBase
              type="text"
              disabled={!!year || !!with_genres}
              className={input}
              placeholder="Search for a movie"
              inputProps={{ 'aria-label': 'Search for a movie', ...field }}
            />
          );
        }}
      />
      <IconButton type="submit" className={iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
export default SearchBox;
