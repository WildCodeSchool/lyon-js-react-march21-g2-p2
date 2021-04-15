export default function FilteringBar(props) {
  const {
    criteriaList,
    setSelectedCriteria,
    selectedCriteria,
    setSelectedValue,
  } = props;

  function handleSelection({ target }) {
    // We need to distinguish between the input from criteria and the one from its value
    target.id === 'criteria'
      ? setSelectedCriteria(target.value)
      : setSelectedValue(target.value);
  }

  return (
    <div className="filtering-bar">
      <label htmlFor="criteria">
        <select
          placeholder="Criteria"
          name="criteria"
          id="criteria"
          onChange={handleSelection}
        >
          {/* We display each criteria key in the select element as an option */}
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
          {/* When a criteria is selected (truthy) we display each criteria value in the select element as an option */}
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
