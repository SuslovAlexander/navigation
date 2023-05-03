import { FC } from "react";

import { ICheckBoxProps } from "./ICheckboxProps";

import styles from "./Checkbox.module.css";
const Checkbox: FC<ICheckBoxProps> = ({ checked, id, onSelect }) => {
  return (
    <>
      <input
        type="checkbox"
        className={styles.checkbox}
        id={id}
        name="test"
        defaultChecked={checked}
        onChange={() => onSelect(id)}
      ></input>
      <label htmlFor={id} />
    </>
  );
};

export default Checkbox;
