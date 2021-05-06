import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Controller } from 'react-hook-form';

//style of the Search input
const useStyles = makeStyles((theme) => ({
  root: {
    background: 'var(--bg-secondary)',
    color: 'var(--text-primary)',
  },
  input: {
    marginLeft: theme.spacing(2),
    color: 'var(--text-primary)',
  },
  iconButton: {
    color: 'var(--text-primary)',
    padding: '.5em',
  },
}));

const SearchBox = ({ control, year, with_genres }) => {
  const { root, input, iconButton } = useStyles();

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form className={root} onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};
export default SearchBox;
