import { FC } from "react";

import { IItemEditprops } from "./IItemEditProps";

import styles from "./ItemEdit.module.css";

const ItemEdit: FC<IItemEditprops> = ({ children, title }) => {
  return (
    <div className={styles.wrap}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  );
};

export default ItemEdit;
