import { FC } from "react";

import { ISelectProps } from "./ISelectProps";

import styles from "./Select.module.css";

const Select: FC<ISelectProps> = ({ pageAmount, onSelect }) => {
  const selectOptions = [];
  for (let i = 1; i <= pageAmount; i++) {
    selectOptions.push(i);
  }

  const handleChange = (e: any): void => {
    onSelect(e.target.value);
  };

  return (
    <select className={styles.select} onChange={handleChange}>
      {selectOptions.map((option) => {
        return <option key={option}>{option}</option>;
      })}
    </select>
  );
};

export default Select;
