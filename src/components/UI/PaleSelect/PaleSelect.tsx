import { FC } from "react";

import Select from "../Select/Select";

import { IPaleSelectProps } from "./IPaleSelectProps";

import styles from "./PaleSelect.module.css";

const PaleSelect: FC<IPaleSelectProps> = ({ values }) => {
  return (
    <div className={styles.wrap}>
      <Select values={values} isPale={true} />
    </div>
  );
};

export default PaleSelect;
