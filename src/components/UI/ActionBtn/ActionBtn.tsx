import { FC } from "react";

import { IActionBtnProps } from "./IActionBtnProps";

import styles from "./ActionBtn.module.css";

const ActionBtn: FC<IActionBtnProps> = ({ onClick, children }) => {
  return (
    <div className={styles.btn} onClick={onClick}>
      {children}
    </div>
  );
};

export default ActionBtn;
