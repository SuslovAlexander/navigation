import { FC, useEffect, useState } from "react";

import { IBrightInputProps } from "./IBrightInputProps";

import styles from "./BrightInput.module.css";

const BrightInput: FC<IBrightInputProps> = ({ value }) => {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    setInputValue(value);
  }, []);
  return (
    <input
      className={styles.input}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default BrightInput;
