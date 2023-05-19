import { FC } from "react";

import PageSelect from "../../../components/UI/PageSelect/PageSelect";

import { IShowPageAmountProps } from "./IShowPageAmountProps";

import styles from "./ShowPageAmount.module.css";

const ShowPageAmount: FC<IShowPageAmountProps> = ({ amount, onSetAmount }) => {
  return (
    <div className={styles.wrap}>
      <span className={styles.text}>Показывать</span>
      <PageSelect
        pageAmount={amount}
        onSelect={(val: string) => onSetAmount(+val)}
      />
    </div>
  );
};

export default ShowPageAmount;
