import { FC } from "react";

import { ITitledContentProps } from "./ITitledContentProps";

import styles from "./TitledContent.module.css";

const TitledContent: FC<ITitledContentProps> = ({ heading, children }) => {
  return (
    <div className={styles.wrap}>
      <p className={styles.heading}>{heading}</p>
      {children}
    </div>
  );
};

export default TitledContent;
