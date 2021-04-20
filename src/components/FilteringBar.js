import { useEffect } from 'react';
// import './styles.css';
import axios from 'axios';
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import qs from 'query-string';

const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

const yearsOfCinema = new Array(dayjs().year() - 1893)
  .fill()
  .map((el, i) => i + 1894)
  .sort((a, b) => b - a);

/**
 * @description A component to filter a movie list
 * @date 20/04/2021
 * @export
 * @param {*} {
 *  setMovieList,
 *  location,
 *  history,
 *  availableGenres,
 *  apiUrl,
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
}) {
  // the default values of the filters come from the querystring in the URL
  const { register, watch } = useForm({
    defaultValues: {
      ...qs.parse(location.search),
    },
  });

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
      .get(apiUrl + apiPopularRoute + apiKey + '&' + queryString.substring(1))
      .then((res) => {
        //console.log(res.data.results);
        setMovieList(res.data.results);
      });
  }, [location]);

  return (
    <form>
      <h2>Filters</h2>
      <label>
        year :
        <select {...register('year')}>
          <option key={''} value={''}>
            All
          </option>
          {yearsOfCinema.map((year) => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </label>
      <br />
      <br />
      {availableGenres.length && (
        <label>
          genres :
          <select {...register('with_genres')}>
            <option key={''} value={''}>
              All
            </option>
            {availableGenres.map((genre) => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>
        </label>
      )}
    </form>
  );
}
