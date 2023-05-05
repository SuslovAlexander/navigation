import { FC } from "react";

import { ICheckBoxProps } from "./ICheckboxProps";

import styles from "./Checkbox.module.css";
const Checkbox: FC<ICheckBoxProps> = ({ checked, id, onSelect }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        className={styles.checkbox}
        id={id}
        onChange={() => onSelect(id)}
      ></input>
      <label htmlFor={id} />
    </>
  );
};

export default Checkbox;
