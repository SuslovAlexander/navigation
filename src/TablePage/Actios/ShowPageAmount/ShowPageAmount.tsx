import { FC } from "react";

import Select from "../../Select/Select";

import { IShowPageAmountProps } from "./IShowPageAmountProps";

import styles from "./ShowPageAmount.module.css";

const ShowPageAmount: FC<IShowPageAmountProps> = ({ amount, onSetAmount }) => {
  return (
    <div className={styles.wrap}>
      <span className={styles.text}>Показывать</span>
      <Select pageAmount={amount} onSelect={(val: any) => onSetAmount(val)} />
    </div>
  );
};

export default ShowPageAmount;