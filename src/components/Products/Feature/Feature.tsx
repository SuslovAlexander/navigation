import { FC } from "react";

import BrightInput from "../../UI/BrightInput/BrightInput";
import PaleInput from "../../UI/PaleInput/PaleInput";
import RemoveButton from "../../UI/RemoveButton/RemoveButton";

import styles from "./Feature.module.css";

const Feature: FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.bright}>
        <BrightInput value="Страна  изготовитель" />
        <BrightInput value="Франция" />
        <RemoveButton />
      </div>
      <div className={styles.pale}>
        <PaleInput placeholder="Название характеристики" />
        <PaleInput placeholder="Значение характеристики" />
        <RemoveButton />
      </div>
    </div>
  );
};

export default Feature;
