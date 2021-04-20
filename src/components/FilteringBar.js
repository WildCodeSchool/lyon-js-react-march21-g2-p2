export default function FilteringBar({
  criteriaList,
  setSelectedCriteria,
  selectedCriteria,
  setSelectedValue,
}) {
  return (
    <div className="filtering-bar">
      <label htmlFor="criteria">
        <select
          placeholder="Criteria"
          name="criteria"
          id="criteria"
          onChange={({ target }) => setSelectedCriteria(target.value)}
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
          onChange={({ target }) => setSelectedValue(target.value)}
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
