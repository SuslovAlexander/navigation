import { FC, useState } from "react";

import { IpageInputProps } from "./IPageInputProps";

import styles from "./PageInput.module.css";

const PageInput: FC<IpageInputProps> = ({ current }) => {
  return (
    <input
      type="number"
      className={styles.input}
      value={current}
      onChange={() => {
        true;
      }}
    />
  );
};

export default PageInput;
