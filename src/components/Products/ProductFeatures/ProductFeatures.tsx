import { FC, useState } from "react";

import { ReactComponent as Trash } from "../../../public/assets/images/trash.svg";
import { RANDOM } from "../../../shared/utils/random-id";
import ActionBtn from "../../UI/ActionBtn/ActionBtn";
import PaleInput from "../../UI/PaleInput/PaleInput";
import Plus from "../../UI/Plus/Plus";
import Feature from "../Feature/Feature";

import { IProductFeatures } from "./IProductFeaturesProps";

import styles from "./ProductFeatures.module.css";

const ProductFeatures: FC<IProductFeatures> = ({
  features,
  onRemoveFeature,
  onAddFeature,
}) => {
  const [paleTitleName, setPaleTitleName] = useState("");
  const [paleValueName, setPaleValueName] = useState("");

  const onClearInputs = (): void => {
    setPaleTitleName("");
    setPaleValueName("");
  };

  const handleAddFeature = (): void => {
    const newFeature = {
      id: RANDOM.id,
      key: paleTitleName,
      value: paleValueName,
    };
    onAddFeature(newFeature);
    onClearInputs();
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        {features?.map((feature) => (
          <Feature
            key={feature.id}
            data={feature}
            onRemoveFeature={onRemoveFeature}
          />
        ))}
        <div className={styles.pale}>
          <PaleInput
            placeholder="Название характеристики"
            value={paleTitleName}
            onChange={setPaleTitleName}
          />
          <PaleInput
            placeholder="Значение характеристики"
            value={paleValueName}
            onChange={setPaleValueName}
          />
          <ActionBtn onClick={onClearInputs}>
            <Trash />
          </ActionBtn>
        </div>
      </div>
      <p className={styles.note}>{`Максимум 15 характеристик`}</p>
      <Plus title="Добавить характеристику" onAdd={handleAddFeature} />
    </div>
  );
};

export default ProductFeatures;
