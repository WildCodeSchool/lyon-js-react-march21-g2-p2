import { useEffect, useState } from 'react';
import axios from 'axios';
import './MoviePage.css';
import MovieList from '../components/MovieList';
import FilteringBar from '../components/FilteringBar';
import { useLocation, useHistory } from 'react-router';

const imgUrl = 'https://image.tmdb.org/t/p/original';
const apiUrl = 'https://api.themoviedb.org/3';
const apiPopularRoute = '/movie/popular?';
const apiKey = 'api_key=f22eb05a70b166bd4e2c1312e15d8e8b';

export default function MoviePage() {
  const [availableGenres, setAvailableGenres] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const history = useHistory();
  const location = useLocation();

  // Get the movies from TMDB api
  useEffect(() => {
    axios
      .get(apiUrl + apiPopularRoute + apiKey)
      .then(({ data }) => setMovieList(data.results));
  }, []);

  const [searchValue, setSearchValue] = useState('');

  // get all the genres available in TMDB
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=f22eb05a70b166bd4e2c1312e15d8e8b'
      )
      .then((res) => setAvailableGenres(res.data.genres));
  }, []);

  return (
    <>
      <h1>Here is a list of popular movies</h1>
      <FilteringBar
        availableGenres={availableGenres}
        setAvailableGenres={setAvailableGenres}
        movieList={movieList}
        setMovieList={setMovieList}
        history={history}
        location={location}
        apiUrl={apiUrl}
      />
      <MovieList movieList={movieList} imgUrl={imgUrl} />
    </>
  );
}
