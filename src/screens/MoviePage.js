/*component import*/
import { useEffect, useState } from 'react';
import axios from 'axios';
import './MoviePage.css';
import MovieList from '../components/MovieList';
import FilteringBar from '../components/FilteringBar';
const discoverMovieEndpoint =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f22eb05a70b166bd4e2c1312e15d8e8b';

export default function MoviePage() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios
      .get(discoverMovieEndpoint)
      .then(({ data }) => setMovieList(data.results));
  }, []);

  // if(filterCriteria === 'genre' ? `&with_genres=${filterValue}`
  const [filterCriteria, setFilterCriteria] = useState('genre');
  const [filterValue, setFilterValue] = useState('action');
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <h1>Here is the list of all movies</h1>
      {/* <FilteringBar 
        movieList={movieList}
        filterCriteria={filterCriteria}
        setFilterCriteria={setFilterCriteria}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />*/}
      <MovieList movieItems={movieList} />
    </>
  );
}
