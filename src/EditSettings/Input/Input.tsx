import { FC, useState } from "react";

import { IInputProps } from "./IInputProps";

import styles from "./Input.module.css";

const Input: FC<IInputProps> = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default Input;
