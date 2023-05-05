import { FC, useState } from "react";

import { IInputProps } from "./IInputProps";

import styles from "./Input.module.css";

const Input: FC<IInputProps> = ({ type, placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const inputStyles = styles[type];

  return (
    <input
      type={type}
      className={inputStyles}
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default Input;
