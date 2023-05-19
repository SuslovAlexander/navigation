import { TCatalogProduct } from "./TCatalogProduct";

export type TSubCategory = {
  id: string;
  name: string;
  position: number;
  catalog_product: TCatalogProduct;
};
