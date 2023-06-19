import { FC } from "react";

import Note from "../../../UI/Note/Note";

import { ITitledContentProps } from "./ITitledContentProps";

import styles from "./TitledContent.module.css";

const TitledContent: FC<ITitledContentProps> = ({ heading, children, note }) => {
  return (
    <div className={styles.wrap}>
      <p className={styles.heading}>{heading}</p>
      {children}
      <Note>{note}</Note>
    </div>
  );
};

export default TitledContent;
