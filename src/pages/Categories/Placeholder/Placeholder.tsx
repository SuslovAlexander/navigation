import { FC } from "react";

import { IPlaceholderProps } from "./IPlaceholderProps";

import styles from "./Placeholder.module.css";

const Placeholder: FC<IPlaceholderProps> = ({ text }) => {
  return (
    <div className={styles.wrap}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Placeholder;
