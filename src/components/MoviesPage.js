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
    All: ['      '],
    genre: [],
    date: [],
  });

  const [selectedCriteria, setSelectedCriteria] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [isFilterToggled, setIsFilterToggled] = useState(true);

  useEffect(() => {
    setCriteriaList({
      ...criteriaList,
      genre: ['All', ...new Set(movieList.map(({ genre }) => genre))],
      date: ['All', ...new Set(movieList.map(({ date }) => date))],
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
      {/* Show the filter bar only when the state of the button is true */}
      {!isFilterToggled || (
        <FilteringBar
          criteriaList={criteriaList}
          setSelectedCriteria={setSelectedCriteria}
          selectedCriteria={selectedCriteria}
          setSelectedValue={setSelectedValue}
        />
      )}
      <br />
      <ul>
        {/* Filter the movies only when both criteria and value are selected (truthy) */}
        {movieList
          .filter((movie) =>
            selectedCriteria &&
            selectedValue &&
            selectedCriteria !== 'All' &&
            selectedValue !== 'All'
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
