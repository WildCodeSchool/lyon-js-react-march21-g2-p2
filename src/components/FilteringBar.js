import { useEffect } from 'react';
// import './styles.css';
import axios from 'axios';
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import qs from 'query-string';
import './FilteringBar.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
 *  query,
 *  setQuery,
 * }
 * @return {*} a bar composed of an input to chose the criteria, one to choose its value, one to search...
 */
export default function FilteringBar({
  setMovieList,
  location,
  history,
  availableGenres,
  apiUrl,
  apiPopularRoute,
  apiKey,
  query,
  setQuery,
}) {
  // the default values of the filters come from the querystring in the URL
  const { register, watch } = useForm({
    defaultValues: {
      ...qs.parse(location.search),
    },
  });

  // Here we grab the styles needed
  const { formControl, selectEmpty } = useStyles();

  // watch for input changes
  const year = watch('year');
  const with_genres = watch('with_genres');

  // everytime the filter inputs change, update the URL
  useEffect(() => {
    const queryString = qs.stringify(
      { year, with_genres },
      { skipEmptyString: true }
    );
    history.push('/' + queryString ? `?${queryString}` : '');
  }, [history, year, with_genres]);

  // everytime the search params change in the URL, make a new TMDB API request in order to update search results
  useEffect(() => {
    const queryString = location.search;
    axios
      .get(
        apiUrl +
          apiPopularRoute +
          queryString.substring(1) +
          '&api_key=' +
          apiKey
      )
      .then((res) => {
        setMovieList(res.data.results);
      });
  }, [location]);

  return (
    <div className="filtering-bar">
      <h2>Filter</h2>
      <FormControl className={formControl}>
        <InputLabel shrink id="year-label">
          Year
        </InputLabel>
        <Select
          labelId="year"
          id="year"
          displayEmpty
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
      <SearchBox query={query} setQuery={setQuery} />
    </div>
  );
}
