import { FC } from "react";

import Gap from "../../Layout/Gap/Gap";
import BrightInput from "../../UI/BrightInput/BrightInput";
import PaleInput from "../../UI/PaleInput/PaleInput";
import RemoveButton from "../../UI/RemoveButton/RemoveButton";

import styles from "./Feature.module.css";

const Feature: FC<any> = ({ data }) => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.bright}>
          <BrightInput value={data.key} />
          <BrightInput value={data.value} />
          <RemoveButton />
        </div>
        {/*       <div className={styles.pale}>
        <PaleInput placeholder="Название характеристики" />
        <PaleInput placeholder="Значение характеристики" />
        <RemoveButton />
      </div> */}
      </div>
      <Gap gap="16px" />
    </>
  );
};

export default Feature;
