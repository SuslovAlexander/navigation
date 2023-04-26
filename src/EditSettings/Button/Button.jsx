import styles from "./Button.module.css";
import { useState } from "react";

const Button = ({ isActive, onBtnClick, children }) => {
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
