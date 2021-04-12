import './MoviesPage.css';
import { useState } from 'react';
import FilterListTwoToneIcon from '@material-ui/icons/FilterListTwoTone';

export default function MoviesPage() {
  const [movieList, setMovieList] = useState([
    { title: 'Avatar', genre: 'science-fiction', date: 2009 },
    { title: 'Black Swan', genre: 'drama', date: 2010 },
    { title: 'Inception', genre: 'science-fiction', date: 2010 },
    { title: 'Moonlight', genre: 'drama', date: 2016 },
  ]);

  function handleFilter() {
    // Toggle the criteria list
    console.log('toggle');
  }
  return (
    <>
      <h3 className="page-title">Movie list</h3>
      <button type="button" onClick={handleFilter}>
        <FilterListTwoToneIcon className="filter-icon" />
      </button>
    </>
  );
}
