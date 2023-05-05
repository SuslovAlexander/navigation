import { FC, useState } from "react";

import { ReactComponent as Password } from "../../../public/assets/images/password.svg";

import { IInputProps } from "./IInputProps";

import styles from "./Input.module.css";

const Input: FC<IInputProps> = ({ type, placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState(type);

  const handleShowPassword = (): void => {
    setInputType("text");
  };

  const handleHidePassword = (): void => {
    setInputType("password");
  };

  const passwordIcon = (
    <div
      className={styles.icon}
      onMouseDown={handleShowPassword}
      onMouseUp={handleHidePassword}
    >
      <Password />
    </div>
  );

  return (
    <div className={styles.wrap}>
      <input
        type={inputType}
        className={styles.input}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {type === "password" && passwordIcon}
    </div>
  );
};

export default Input;
