import { ICategoryItem } from "./ICategoryItem";

export interface ICategoriesItem extends ICategoryItem {
  catalog_product: {
    id: string | undefined;
  };
}
