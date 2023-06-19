import { FC } from "react";

import { IActionBtnProps } from "./IActionBtnProps";

import styles from "./ActionBtn.module.css";

const ActionBtn: FC<IActionBtnProps> = ({ onClick, children }) => {
  const handleClick = (): void => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className={styles.btn} onClick={handleClick}>
      {children}
    </div>
  );
};

export default ActionBtn;
