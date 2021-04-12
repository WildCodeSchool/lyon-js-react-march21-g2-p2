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

  const [filterValues, setFilterValues] = useState({
    genre: '',
    date: '',
  });

  const [isFilterToggled, setIsFilterToggled] = useState(false);

  function handleFilter() {
    // Toggle the criteria list
    setIsFilterToggled(!isFilterToggled);
    console.log(isFilterToggled);
    console.log(filterValues.genre);
    console.log(filterValues.date);
  }
  return (
    <>
      <h3 className="page-title">Movie list</h3>
      <button type="button" onClick={handleFilter}>
        <FilterListTwoToneIcon className="filter-icon" />
      </button>
      <ul>
        {/* TODO put a condition here from a state... */}
        {movieList
          .filter(({ date }) => !filterValues.date || date >= filterValues.date)
          .filter(
            ({ genre }) => !filterValues.genre || genre === filterValues.genre
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
