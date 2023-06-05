import { FC } from "react";

import { ReactComponent as Trash } from "../../../../public/assets/images/trash.svg";
import ActionBtn from "../../../UI/ActionBtn/ActionBtn";
import BrightInput from "../../../UI/BrightInput/BrightInput";
import PaleInput from "../../../UI/PaleInput/PaleInput";

import styles from "./Value.module.css";

const Value: FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.bright}>
        <BrightInput value="50мл" />
        <BrightInput value="SKU0002" />
        <ActionBtn>
          <Trash />
        </ActionBtn>
      </div>
      <div className={styles.pale}>
        <PaleInput placeholder="Значение" />
        <PaleInput placeholder="Артикул" />
        <ActionBtn>
          <Trash />
        </ActionBtn>
      </div>
    </div>
  );
};

export default Value;
