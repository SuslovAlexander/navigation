import styles from "./Input.module.css";
import { FC } from "react";

const Input: FC<any> = ({ placeholder }) => {
  return <input className={styles.input} placeholder={placeholder} />;
};

export default Input;
