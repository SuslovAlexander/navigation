import { FC, useState } from "react";

import { ReactComponent as Password } from "../../../public/assets/images/password.svg";

import { IInputProps } from "./IInputProps";

import styles from "./Input.module.css";

const Input: FC<IInputProps> = ({
  value,
  type,
  placeholder,
  disabled = false,
  variant,
  onInputBlur,
  onChange,
  iconImg,
}) => {
  const [inputValue, setInputValue] = useState<any>(value);
  const [inputType, setInputType] = useState(type);

  const inputStyles = `${styles.input} ${disabled ? styles.disabled : ""}`;
  let inputStyle = {};
  if (variant === "link") {
    inputStyle = { color: "#737680" };
  }

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

  const handleInputBlur = (): void => {
    if (onInputBlur) {
      onInputBlur(inputValue);
      setInputValue("");
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={styles.wrap}>
      <input
        type={inputType}
        className={inputStyles}
        style={inputStyle}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onBlur={handleInputBlur}
      />
      {type === "password" && passwordIcon}
      {variant === "link" && <div className={styles.link}>{iconImg}</div>}
    </div>
  );
};

export default Input;
