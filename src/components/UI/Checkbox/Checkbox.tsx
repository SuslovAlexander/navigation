import { FC } from "react";

import { ICheckBoxProps } from "./ICheckboxProps";

import styles from "./Checkbox.module.css";
const Checkbox: FC<ICheckBoxProps> = ({ checked, id, onSelect }) => {
  const handleChange = (): void => {
    if (onSelect) {
      onSelect(id);
    }
  };
  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        className={styles.checkbox}
        id={id}
        onChange={handleChange}
      ></input>
      <label htmlFor={id} />
    </>
  );
};

export default Checkbox;
