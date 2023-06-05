import { ChangeEvent, FC, ReactEventHandler } from "react";

import { ITextareaProps } from "./ITextareaProps";

import styles from "./Textarea.module.css";

const Textarea: FC<ITextareaProps> = ({
  placeholder,
  value,
  onChange,
  disabled,
}) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <textarea
      tabIndex={0}
      onChange={handleChange}
      className={styles.textarea}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
    />
  );
};

export default Textarea;
