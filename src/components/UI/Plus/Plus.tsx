import { FC } from "react";

import { IPlusProps } from "./IPlusProps";

import styles from "./Plus.module.css";

const Plus: FC<IPlusProps> = ({ title, onAdd }) => {
  return (
    <div className={styles.wrap} onClick={onAdd}>
      <span>+</span>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Plus;
