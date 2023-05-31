import { FC } from "react";

import { IFieldProps } from "./IFieldProps";

import styles from "./Field.module.css";

const Field: FC<IFieldProps> = ({ title, children }) => {
  return (
    <div className={styles.wrap}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  );
};

export default Field;
