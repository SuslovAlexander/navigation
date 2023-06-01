import { FC } from "react";

import { ReactComponent as Trash } from "../../../public/assets/images/remove.svg";
import ActionBtn from "../../UI/ActionBtn/ActionBtn";
import BrightInput from "../../UI/BrightInput/BrightInput";
import PaleInput from "../../UI/PaleInput/PaleInput";

import { IFeatureProps } from "./IFeatureProps";

import styles from "./Feature.module.css";

const Feature: FC<IFeatureProps> = ({ data }) => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.bright}>
          <BrightInput value={data.key} />
          <BrightInput value={data.value} />
          <ActionBtn>
            <Trash />
          </ActionBtn>
        </div>
        <div className={styles.pale}>
          <PaleInput placeholder="Название характеристики" />
          <PaleInput placeholder="Значение характеристики" />
          <ActionBtn>
            <Trash />
          </ActionBtn>
        </div>
      </div>
    </>
  );
};

export default Feature;
