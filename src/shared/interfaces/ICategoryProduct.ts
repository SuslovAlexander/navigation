import { IBrand } from "./IProduct";

export interface ICategoryProduct {
  id: string;
  name: string;
  isRetailAllowed: boolean;
  brand: IBrand;
  images: [];
}
