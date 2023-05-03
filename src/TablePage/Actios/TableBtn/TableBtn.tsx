import { FC } from "react";

import { iTableBtnProps } from "./ITableBtnProps";

import styles from "./TableBtn.module.css";

const TableBtn: FC<iTableBtnProps> = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};

export default TableBtn;
