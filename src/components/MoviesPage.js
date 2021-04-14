import './MoviesPage.css';
import { useState, useEffect } from 'react';
import FilterListIcon from '@material-ui/icons/FilterListTwoTone';
import FilteringBar from './FilteringBar';

export default function MoviesPage() {
  const [movieList, setMovieList] = useState([
    { title: 'Avatar', genre: 'science-fiction', date: 2009 },
    { title: 'Black Swan', genre: 'drama', date: 2010 },
    { title: 'Inception', genre: 'science-fiction', date: 2010 },
    { title: 'Moonlight', genre: 'drama', date: 2016 },
  ]);

  const [criteriaList, setCriteriaList] = useState({
    genre: [],
    date: [],
  });

  const [selectedCriteria, setSelectedCriteria] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [isFilterToggled, setIsFilterToggled] = useState(true);

  useEffect(() => {
    setCriteriaList({
      ...criteriaList,
      genre: [...new Set(movieList.map(({ genre }) => genre))],
      date: [...new Set(movieList.map(({ date }) => date))],
    });

    // Cleanup the request for when we switch to API requests (use with axios and  { cancelToken: source.token })
    // return function cleanup() {
    //   cancels the previous request on unmount or query update :
    //   source.cancel('Api is being canceled');
    // };
  }, []);

  // Toggle the criteria list
  function handleFilter() {
    setIsFilterToggled(!isFilterToggled);
  }
  return (
    <>
      <h3 className="page-title">Movie list</h3>
      <button type="button" onClick={handleFilter}>
        <FilterListIcon className="filter-icon" />
      </button>

      {!isFilterToggled || (
        <FilteringBar
          criteriaList={criteriaList}
          setSelectedCriteria={setSelectedCriteria}
          selectedCriteria={selectedCriteria}
          setMovieList={setMovieList}
          movieList={movieList}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      )}

      <br />
      <ul>
        {movieList
          .filter((movie) =>
            selectedCriteria && selectedValue
              ? movie[selectedCriteria].toString() === selectedValue
              : true
          )

          .map(({ title, date }) => (
            <li className="movie-list" key={title}>
              {title} ({date}){' '}
            </li>
          ))}
      </ul>
    </>
  );
}
