import { FC } from "react";

import { IContainerProps } from "./IContainerProps";

import styles from "./Container.module.css";

const Container: FC<IContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
