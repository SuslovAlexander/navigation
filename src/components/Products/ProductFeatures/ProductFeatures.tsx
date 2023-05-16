import { FC } from "react";

import { RANDOM } from "../../../helpers/random-id";
import Plus from "../../UI/Plus/Plus";
import Feature from "../Feature/Feature";

import { IProductFeatures } from "./IProductFeaturesProps";

import styles from "./ProductFeatures.module.css";

const ProductFeatures: FC<IProductFeatures> = ({
  title,
  maxFeatures,
  features,
}) => {
  return (
    <div className={styles.wrap}>
      <p className={styles.heading}>{title}</p>
      <div className={styles.content}>
        {features.map((feature) => (
          <Feature key={RANDOM.id} data={feature}/>
        ))}
      </div>
      <p className={styles.note}>{`Максимум ${maxFeatures} характеристик`}</p>
      <Plus title="Добавить характеристику" />
    </div>
  );
};

export default ProductFeatures;
