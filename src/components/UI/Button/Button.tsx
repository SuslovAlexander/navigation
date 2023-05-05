import { FC } from "react";

import { IButtonProps } from "./IButtonProps";

import styles from "./Button.module.css";

const Button: FC<IButtonProps> = ({
  children,
  highlighted = true,
  size,
  onBtnClick,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${styles.btn} ${size ? styles[size] : ""} ${
        highlighted ? styles.highlighted : ""
      }`}
      onClick={onBtnClick}
    >
      {children}
    </button>
  );
};

export default Button;
