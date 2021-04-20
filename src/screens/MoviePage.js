import { useEffect, useState } from 'react';
import axios from 'axios';
import './MoviePage.css';
import MovieList from '../components/MovieList';
import FilteringBar from '../components/FilteringBar';
const discoverMovieEndpoint =
  'https://api.themoviedb.org/3/movie/popular?api_key=f22eb05a70b166bd4e2c1312e15d8e8b';

export default function MoviePage() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios
      .get(discoverMovieEndpoint)
      .then(({ data }) => setMovieList(data.results));
  }, []);

  const criteriaList = ['Genre', 'Date'];

  const [filterValueList, setFilterValueList] = useState([]);

  const [filterCriteria, setFilterCriteria] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <h1>Here is a list of popular movies</h1>
      <FilteringBar
        filterCriteria={filterCriteria}
        setFilterCriteria={setFilterCriteria}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        criteriaList={criteriaList}
        filterValueList={filterValueList}
        setFilterValueList={setFilterValueList}
        movieList={movieList}
        setMovieList={setMovieList}
      />
      <MovieList movieList={movieList} />
    </>
  );
}
