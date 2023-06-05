import { FC } from "react";

import ProductList from "../ProductList/ProductList";

import { IProductsBlockProps } from "./IProductsBlockProps";

import styles from "./ProductsBlock.module.css";

const ProductsBlock: FC<IProductsBlockProps> = ({ products, onClick }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles["title-add"]}>Товары протокола</div>
      <ProductList products={products} onClick={onClick} />
      <div className={styles["action-add"]}>+ Добавить товар</div>
    </div>
  );
};

export default ProductsBlock;
