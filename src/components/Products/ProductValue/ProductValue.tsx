import { FC } from "react";

import { RANDOM } from "../../../helpers/random-id";
import Plus from "../../UI/Plus/Plus";

import Value from "./Value/Value";
import { IProductValueProps } from "./IProductValueProps";

import styles from "./ProductValue.module.css";

const ProductValue: FC<IProductValueProps> = ({ title, values }) => {
  return (
    <div className={styles.wrap}>
      <p className={styles.heading}>{title}</p>
      <div className={styles.content}>
        {values.map((value) => (
          <Value key={RANDOM.id} />
        ))}
      </div>
      <Plus title="Добавить объем" />
    </div>
  );
};

export default ProductValue;
