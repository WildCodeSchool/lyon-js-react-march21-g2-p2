import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs';
import './FilteringBar.css';
import SearchBox from './SearchBox';

const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

const yearsOfCinema = new Array(dayjs().year() - 1893)
  .fill()
  .map((_, i) => i + 1894)
  .sort((a, b) => b - a);

// Defines the styles in use for this component (MUI)
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

/**
 * @description A component to filter a movie list
 * @date 21/04/2021
 * @export
 * @param {*} {
 *    setMovieList,
 *  location,
 *  history,
 *  availableGenres,
 *  apiUrl,
 *  apiPopularRoute,
 *  apiKey,
 * }
 * @return {*} a bar composed of an input to chose the criteria, one to choose its value, one to search...
 */
export default function FilteringBar({
  availableGenres,
  query,
  with_genres,
  register,
  year,
  control,
}) {
  // Here we grab the styles needed
  const { formControl, selectEmpty } = useStyles();

  return (
    <div className="filtering-bar">
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
      {availableGenres.length && (
        <FormControl className={formControl}>
          <InputLabel shrink id="4">
            Genre
          </InputLabel>
          <Select
            labelId="genre"
            disabled={!!query}
            id="genre"
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
      <SearchBox control={control} year={year} with_genres={with_genres} />
    </div>
  );
}
