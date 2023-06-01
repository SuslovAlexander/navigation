import { FC } from "react";

import { getOptions } from "../../../shared/utils/pages-options";

import { IPageSelectProps } from "./IPageSelectProps";

import styles from "./PageSelect.module.css";

const PageSelect: FC<IPageSelectProps> = ({ pageAmount, onSelect }) => {
  const selectOptions = getOptions(pageAmount, [10, 50, 100]);

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
