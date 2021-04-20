import { useEffect } from 'react';

/**
 * @description A component to filter a movie list
 * @date 20/04/2021
 * @export
 * @param {*} {
 *   criteriaList,
 *   setFilterCriteria,
 *   filterCriteria,
 *   setSelectedValue,
 *   searchValue,
 *   setSearchValue,
 *   filterValueList,
 *   setFilterValueList,
 *   setMovieList
 * }
 * @return {*} a bar composed of an input to chose the criteria, one to choose its value, one to search...
 */
export default function FilteringBar({
  criteriaList,
  filterCriteria,
  setFilterCriteria,
  filterValue,
  setFilterValue,
  searchValue,
  setSearchValue,
  filterValueList,
  setFilterValueList,
  movieList,
  setMovieList,
}) {
  console.log(movieList);
  // useEffect(() => {
  //   setFilterValueList(movieList.map((movie) => movie[filterCriteria]));
  //   // return () => {
  //   //   cleanup;
  //   // };
  // }, [filterCriteria]);
  return (
    <div className="filtering-bar">
      <label htmlFor="filterCriteria">
        <select
          name="filterCriteria"
          id="filterCriteria"
          value={filterCriteria}
          onChange={({ target }) => setFilterCriteria(target.value)}
        >
          {/* We display each criteria in the select element as an option */}
          {criteriaList.map((criteria) => (
            <option key={criteria} value={criteria}>
              {criteria}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="filterValue">
        <select
          name="filterValue"
          id="filterValue"
          value={filterValue}
          onChange={({ target }) => setFilterValue(target.value)}
        >
          {/* When a criteria is selected (truthy) we display each criteria value in the select element as an option */}
          {!filterCriteria ||
            filterValueList.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
        </select>
      </label>
      <label htmlFor="search">
        Search
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
        />
      </label>
    </div>
  );
}
