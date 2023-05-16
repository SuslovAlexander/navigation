import { FC } from "react";

import { IPaleInputProps } from "./IPaleInputProps";

import styles from "./PaleInput.module.css";

const PaleInput: FC<IPaleInputProps> = ({ placeholder }) => {
  return <input className={styles.input} placeholder={placeholder} />;
};

export default PaleInput;
