import { BRANDS } from "./brands.mock";
import { PRODUCT_MODAL } from "./product-modal.mock";

export const BRAND_LIST = {
  options: BRANDS.data.map((brand) => brand.name),
  name: "brand",
};

export const CATEGORY_LIST = {
  options: PRODUCT_MODAL.catalog_product.map((category) => category.name),
  name: "catalog_product",
};
