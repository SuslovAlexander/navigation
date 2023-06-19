import { FC } from "react";

import { ReactComponent as Trash } from "../../../public/assets/images/trash.svg";
import ActionBtn from "../../UI/ActionBtn/ActionBtn";
import BrightInput from "../../UI/BrightInput/BrightInput";

import { IFeatureProps } from "./IFeatureProps";

import styles from "./Feature.module.css";

const Feature: FC<IFeatureProps> = ({ data, onRemoveFeature }) => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.bright}>
          <BrightInput value={data.key} />
          <BrightInput value={data.value} />
          <ActionBtn onClick={() => onRemoveFeature(data.id)}>
            <Trash />
          </ActionBtn>
        </div>
      </div>
    </>
  );
};

export default Feature;
