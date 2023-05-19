import { FC, useEffect, useState } from "react";

import { ReactComponent as Link } from "../../../public/assets/images/link.svg";
import { ReactComponent as Password } from "../../../public/assets/images/password.svg";

import { IInputProps } from "./IInputProps";

import styles from "./Input.module.css";

const Input: FC<IInputProps> = ({
  type,
  placeholder,
  disabled = false,
  variant,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState(type);

/*   useEffect(() => {
    if (!placeholder) return;
    setInputValue(placeholder);
  }, []); */

  const inputStyles = `${styles.input} ${disabled ? styles.disabled : ""}`;
  let inputStyle = {};
  if (variant === "link") inputStyle = { color: "#737680" };

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
        className={inputStyles}
        style={inputStyle}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {type === "password" && passwordIcon}
      {variant === "link" && (
        <div className={styles.link}>
          <Link />
        </div>
      )}
    </div>
  );
};

export default Input;
