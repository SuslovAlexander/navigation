import { FC } from "react";

import { IPageSelectProps } from "./IPageSelectProps";

import styles from "./PageSelect.module.css";

const PageSelect: FC<IPageSelectProps> = ({ pageAmount, onSelect }) => {
  const selectOptions = [];
  if (pageAmount) {
    for (let i = 1; i <= pageAmount; i++) {
      selectOptions.push(i);
    }
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

export default PageSelect;
