const Select = ({ values }) => {
  return (
    <select name="test">
      {values.map((value) => {
        return (
          <option value={value} key={value}>
            {value}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
