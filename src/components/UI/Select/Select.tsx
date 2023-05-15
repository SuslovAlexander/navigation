import { FC } from "react";

import { ISelectProps } from "./ISelectProps";

import styles from "./Select.module.css";

const Select: FC<ISelectProps> = ({ values, isPale = false }) => {
  const selectStyles = `${styles.select} ${isPale ? styles.pale : ""}`;
  return (
    <select name="test" className={selectStyles}>
      {values.map((value: any) => {
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
