import { FC } from "react";

import { IRowTextItemProps } from "./IRowTextItemProps";

import styles from "./RowTextItem.module.css";

const RowTextItem: FC<IRowTextItemProps> = ({ children }) => {
  return (
    <span className={styles.text} title={`${children ? children : ""}`}>
      {children}
    </span>
  );
};

export default RowTextItem;
