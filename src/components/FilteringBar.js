import dayjs from 'dayjs';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SearchBox from './SearchBox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';

const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

let yearsOfCinema = new Array(dayjs().year() - 1893)
  .fill()
  .map((_, i) => i + 1894)
  .sort((a, b) => b - a);

// Defines the styles in use for this component (MUI)
const useStyles = makeStyles((theme) => ({
  formControl: {
    display: 'flex',
    margin: theme.spacing(0),
    minWidth: 120,
    height: theme.spacing(4),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(2),
    height: theme.spacing(4),
  },
  grid: {
    marginTop: theme.spacing(2),
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
  const { formControl, selectEmpty, button, grid } = useStyles();

  const handleClear = (e) => {
    e.preventDefault();
    clear({ year: '', with_genres: '' });
  };

  return (
    <Grid
      className={grid}
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="flex-start"
    >
      <Grid item>
        <SearchBox control={control} year={year} with_genres={with_genres} />
      </Grid>
      <Grid item>
        <FormControl className={formControl}>
          <InputLabel shrink id="year-label">
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
      </Grid>
      <Grid item>
        {availableGenres.length && (
          <FormControl className={formControl}>
            <InputLabel shrink id="4">
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
      </Grid>
      <Grid item>
        <Button
          className={button}
          size="small"
          variant="outlined"
          onClick={handleClear}
        >
          Clear
        </Button>
      </Grid>
    </Grid>
  );
}
