import { FC } from "react";

import { IButtonProps } from "./IButtonProps";

import styles from "./Button.module.css";

const Button: FC<IButtonProps> = ({ onBtnClick, children }) => {
  return (
    <button className={styles.btn} onClick={() => onBtnClick()}>
      {children}
    </button>
  );
};

export default Button;
