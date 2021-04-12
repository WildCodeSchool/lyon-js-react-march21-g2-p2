import './MoviesPage.css';
import FilterListTwoToneIcon from '@material-ui/icons/FilterListTwoTone';

export default function MoviesPage() {
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
