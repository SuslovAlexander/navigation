import { FC } from "react";

import { ITextareaProps } from "./ITextareaProps";

import styles from "./Textarea.module.css";

const Textarea: FC<ITextareaProps> = ({ placeholder }) => {
  return (
    <textarea className={styles.textarea} placeholder={placeholder}></textarea>
  );
};

export default Textarea;
