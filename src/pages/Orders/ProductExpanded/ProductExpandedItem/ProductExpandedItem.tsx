import { FC } from "react";

import styles from "./ProductExpandedItem.module.css";

const ProductExpandedItem: FC<any> = ({ item }) => {
  return (
    <div className={styles.wrap}>
      <span>{item.name}</span>
      <span>{item.value}</span>
    </div>
  );
};

export default ProductExpandedItem;
