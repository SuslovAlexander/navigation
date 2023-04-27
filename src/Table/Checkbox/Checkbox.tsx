import { FC, useId } from "react";

import { ICheckBoxProps } from "./ICheckboxProps";

import styles from "./Checkbox.module.css";
const Checkbox: FC<ICheckBoxProps> = ({ checked }) => {
  const id = useId();
  return (
    <>
      <input
        type="checkbox"
        className={styles.checkbox}
        id={id}
        name="test"
        defaultChecked={checked}
      ></input>
      <label htmlFor={id} />
    </>
  );
};

export default Checkbox;
