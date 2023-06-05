import { FC } from "react";

import ProductItem from "../ProductItem/ProductItem";

import { IProductListProps } from "./IProductListProps";

const ProductList: FC<IProductListProps> = ({ products, onClick }) => {
  return (
    <>
      {products.map((product) => (
        <ProductItem
          onClick={onClick.bind(null, product.id)}
          firstName={product.name}
          lastName={product.brand.name}
          key={product.id}
        />
      ))}
    </>
  );
};

export default ProductList;
