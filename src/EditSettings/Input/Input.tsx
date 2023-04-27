import { FC } from "react";

import styles from "./Input.module.css";

const Input: FC<any> = ({ placeholder }) => {
  return <input className={styles.input} placeholder={placeholder} />;
};

export default Input;
