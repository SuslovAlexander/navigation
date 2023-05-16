import { FC } from "react";

import Select from "../../UI/Select/Select";

import { IBrightSelectProps } from "./IBrightSelectProps";

import styles from "./BrightSelect.module.css";

const BrightSelect: FC<IBrightSelectProps> = ({ values }) => {
  return (
    <div className={styles.wrap}>
      <Select values={values} />
    </div>
  );
};

export default BrightSelect;
