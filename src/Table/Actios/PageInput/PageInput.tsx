import { FC, useState } from "react";

import { IpageInputProps } from "./IPageInputProps";

import styles from "./PageInput.module.css";

const PageInput: FC<IpageInputProps> = ({ current }) => {
  const [inputValue, setInputValue] = useState<number | string>(current);

  return (
    <input
      type="number"
      className={styles.input}
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
    />
  );
};

export default PageInput;
