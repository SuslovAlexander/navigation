import { FC } from "react";

import { IPaleInputProps } from "./IPaleInputProps";

import styles from "./PaleInput.module.css";

const PaleInput: FC<IPaleInputProps> = ({ placeholder, value, onChange }) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default PaleInput;
