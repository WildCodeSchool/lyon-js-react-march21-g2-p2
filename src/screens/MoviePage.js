import axios from 'axios';
import qs from 'query-string';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import FilteringBar from '../components/FilteringBar';
import MovieList from '../components/MovieList';

const imgUrl = `${process.env.REACT_APP_API_IMAGE_URL}/w200`;
const apiUrl = process.env.REACT_APP_API_SERVICE_URL;
const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const apiPopularRoute = '/movie/popular?';
const apiSearchRoute = '/search/movie?query=';
const apiGenreListRoute = '/genre/movie/list?';

export default function MoviePage() {
  const [availableGenres, setAvailableGenres] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const {
    year: defaultYear = '',
    with_genres: defaultWith_genres = '',
    query: defaultQuery = '',
  } = qs.parse(location.search);

  // the default values of the filters come from the querystring in the URL
  const { register, watch, control, reset } = useForm({
    defaultValues: {
      year: defaultYear,
      with_genres: defaultWith_genres,
      query: defaultQuery,
    },
  });

  // watch for input changes
  const year = watch('year');
  const with_genres = watch('with_genres');
  const query = watch('query');

  useEffect(() => {
    if (!query) {
      axios
        .get(apiUrl + apiPopularRoute + 'api_key=' + apiKey)
        .then(({ data }) => setMovieList(data.results));
    }
  }, [query]);

  useEffect(() => {
    axios
      .get(apiUrl + apiGenreListRoute + 'api_key=' + apiKey)
      .then((res) => setAvailableGenres(res.data.genres));
  }, []);

  useEffect(() => {
    const queryString = qs.stringify(
      { year, with_genres, query },
      { skipEmptyString: true }
    );
    history.push('/' + queryString ? `?${queryString}` : '');

    if (query) {
      axios
        .get(apiUrl + apiSearchRoute + query + '&api_key=' + apiKey)
        .then(({ data }) => setMovieList(data.results));
    } else if (year || with_genres) {
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
    } else {
      axios
        .get(apiUrl + apiPopularRoute + 'api_key=' + apiKey)
        .then(({ data }) => setMovieList(data.results));
    }
  }, [query, year, with_genres, history, location.search]);

  return (
    <>
      <h2>Movies</h2>
      <FilteringBar
        availableGenres={availableGenres}
        register={register}
        year={year}
        with_genres={with_genres}
        query={query}
        control={control}
        clear={reset}
      />
      <MovieList movieList={movieList} imgUrl={imgUrl} />
    </>
  );
}
