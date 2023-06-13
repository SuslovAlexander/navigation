import { FC } from "react";

import ProductExpandedItem from "./ProductExpandedItem/ProductExpandedItem";

import styles from "./ProductExpanded.module.css";

const ProductExpanded: FC<any> = ({ items }) => {
  return (
    <div className={styles.wrap}>
      {items?.map((item: any, index: number) => (
        <ProductExpandedItem item={item} key={index} />
      ))}
    </div>
  );
};

export default ProductExpanded;
