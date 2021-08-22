import React from "react";

import classes from "./Select.module.css";

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className={classes.select}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
