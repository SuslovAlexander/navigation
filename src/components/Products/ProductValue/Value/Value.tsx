import { FC } from "react";

import BrightInput from "../../../UI/BrightInput/BrightInput";
import PaleInput from "../../../UI/PaleInput/PaleInput";
import RemoveButton from "../../../UI/RemoveButton/RemoveButton";

import styles from "./Value.module.css";

const Value: FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.bright}>
        <BrightInput value="50мл" />
        <BrightInput value="SKU0002" />
        <RemoveButton />
      </div>
      <div className={styles.pale}>
        <PaleInput placeholder="Значение" />
        <PaleInput placeholder="Артикул" />
        <RemoveButton />
      </div>
    </div>
  );
};

export default Value;
