import dayjs from 'dayjs';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SearchBox from './SearchBox';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

let yearsOfCinema = new Array(dayjs().year() - 1893)
  .fill()
  .map((_, i) => i + 1894)
  .sort((a, b) => b - a);

// Defines the styles in use for this component (MUI)
const useStyles = makeStyles((theme) => ({
  filters: {
    width: '15ch',
  },
  formControl: {
    display: 'flex',
    background: 'var(--bg-secondary)',
  },
  selectEmpty: {
    color: 'var(--text-primary)',
  },
  label: {
    color: 'var(--text-primary)',
  },
  button: {
    color: 'var(--text-primary)',
    borderColor: 'var(--text-primary)',
  },
  filteringBarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
    '& > *': {
      margin: '0.5em',
    },
  },
}));

export default function FilteringBar({
  availableGenres,
  query,
  with_genres,
  register,
  year,
  control,
  clear,
}) {
  // Here we grab the styles needed
  const {
    formControl,
    selectEmpty,
    label,
    filters,
    button,
    filteringBarContainer,
  } = useStyles();

  const handleClear = (e) => {
    e.preventDefault();
    clear({ year: '', with_genres: '' });
  };

  return (
    <div className={filteringBarContainer}>
      <SearchBox control={control} year={year} with_genres={with_genres} />
      <div className={filters}>
        <FormControl className={formControl}>
          <InputLabel className={label} shrink id="year-label">
            Year
          </InputLabel>
          <Select
            labelId="year"
            id="year"
            displayEmpty
            disabled={!!query}
            value={year}
            autoWidth
            className={selectEmpty}
            {...register('year')}
          >
            <MenuItem key="" value="">
              <em>All</em>
            </MenuItem>
            {yearsOfCinema.map((year) => {
              return (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div className={filters}>
        {availableGenres.length && (
          <FormControl className={formControl}>
            <InputLabel className={label} shrink id="4">
              Genre
            </InputLabel>
            <Select
              labelId="genre"
              disabled={!!query}
              id="genre"
              value={with_genres}
              displayEmpty
              autoWidth
              className={selectEmpty}
              {...register('with_genres')}
            >
              <MenuItem key="" value="">
                <em>All</em>
              </MenuItem>
              {availableGenres.map(({ id, name }) => (
                <MenuItem key={id} value={id}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </div>
      <Button
        className={button}
        size="small"
        variant="outlined"
        onClick={handleClear}
      >
        Clear
      </Button>
    </div>
  );
}
