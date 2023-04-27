import { useState } from "react";
import { FC } from "react";

import { IButtonProps } from "./IButtonProps";

import styles from "./Button.module.css";

const Button: FC<IButtonProps> = ({ isActive, onBtnClick, children }) => {
  const [isClicked, setIsClicked] = useState(isActive);
  const handleClick = () => {
    setIsClicked(!isClicked);
    onBtnClick();
  };

  return (
    <button
      className={`${styles.btn} ${isClicked ? styles.clicked : ""}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
