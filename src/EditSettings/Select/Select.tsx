import { FC } from "react";

import { ISelectProps } from "./ISelectProps";

import styles from "./Select.module.css";

const Select: FC<ISelectProps> = ({ values }) => {
  return (
    <select name="test" className={styles.select}>
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
