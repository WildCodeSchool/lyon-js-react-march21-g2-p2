export default function FilteringBar(props) {
  const {
    criteriaList,
    setSelectedCriteria,
    selectedCriteria,
    setMovieList,
    movieList,
    selectedValue,
    setSelectedValue,
  } = props;

  function handleSelection({ target }) {
    if (target.id === 'criteria') {
      setSelectedCriteria(target.value);
    } else {
      setSelectedValue(target.value);
    }
  }

  return (
    <div className="filtering-bar">
      <label htmlFor="criteria">
        <select
          placeholder="Criteria"
          name="criteria"
          id="criteria"
          onChange={handleSelection}
          option={Object.keys(criteriaList)}
        >
          {Object.keys(criteriaList).map((criteria) => (
            <option key={criteria} value={criteria}>
              {criteria}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="criteria-value">
        <select
          placeholder="Value"
          name="criteria-value"
          id="criteria-value"
          onChange={handleSelection}
        >
          {!selectedCriteria ||
            criteriaList[selectedCriteria].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
        </select>
      </label>
    </div>
  );
}
