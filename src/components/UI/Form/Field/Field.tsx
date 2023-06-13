import { FC } from "react";

import { IFieldProps } from "./IFieldProps";

import styles from "./Field.module.css";

const Field: FC<IFieldProps> = ({ title, children, style }) => {
  return (
    <div className={styles.wrap} style={style}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  );
};

export default Field;
