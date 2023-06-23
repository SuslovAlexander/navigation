import { FC, useState } from "react";

import { ReactComponent as Password } from "../../../public/assets/images/password.svg";

import { IInputProps } from "./IInputProps";

import styles from "./Input.module.css";

const Input: FC<IInputProps> = ({
  disabled = false,
  type,
  value,
  placeholder,
  iconImg,
  variant,
  onChange,
  onAddImage,
  onInputBlur,
}) => {
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
    if (onInputBlur && value) {
      onInputBlur(value);
      if (onChange) {
        onChange("");
      }
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (
    e
  ) => {
    if (e.code === "Enter") {
      handleInputBlur();
      if (onChange) {
        onChange("");
      }
    }
  };

  return (
    <div className={styles.wrap}>
      <input
        type={inputType}
        className={inputStyles}
        style={inputStyle}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleInputBlur}
        onKeyDown={handleInputKeyDown}
      />
      <div className={styles.link} onClick={onAddImage}>
        {type === "password" && passwordIcon}
        {variant === "link" && <div className={styles.link}>{iconImg}</div>}
      </div>
    </div>
  );
};

export default Input;
