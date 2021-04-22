/*MoviePage function which will call MovieList rendering in MovieCard*/

/*component import*/
import { useEffect, useState } from 'react';
import axios from 'axios';
import './MoviePage.css';
import MovieList from '../components/MovieList';
import SearchBox from '../components/SearchBox';

export default function MoviePage() {
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const apiUrl = 'https://api.themoviedb.org/3';
  const apiPopularRoute = '/movie/popular?';
  const apiSearchRoute = '/search/movie?query=';
  const apiKey = '&api_key=f22eb05a70b166bd4e2c1312e15d8e8b';

  useEffect(() => {
    axios
      .get(
        `${apiUrl}${
          searchValue !== '' ? apiSearchRoute + searchValue : apiPopularRoute
        }${apiKey}`
      )
      .then((response) => setMovieList(response.data.results));
  }, [searchValue]);

  return (
    <>
      <h1>Here is the list of all movies</h1>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList movieList={movieList} searchValue={searchValue} />
    </>
  );
}
