import { FC } from "react";

import ProductItem from "../ProductItem/ProductItem";

import { IProductListProps } from "./IProductListProps";

import styles from "./ProductItem.module.css";

const ProductList: FC<IProductListProps> = ({ products, onClick }) => {
  return (
    <div className={styles.wrap}>
      {products.map((product) => (
        <ProductItem
          onClick={() => onClick(product.id)}
          firstName={product.name}
          lastName={product.brand.name}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default ProductList;
