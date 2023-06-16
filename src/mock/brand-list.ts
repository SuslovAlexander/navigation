import { BRANDS } from "./brands.mock";

export const BRAND_LIST = {
  options: BRANDS.data.map((brand) => brand.name),
  name: "brand",
};
