import { ICategory } from "./ICategory";
import { ICategoryProduct } from "./ICategoryProduct";
import { IBrand } from "./IProduct";

export interface IProtocol {
  id: string;
  name: string;
  description: string;
  isRetailAllowed: boolean;
  brand: IBrand;
  protocol_category: ICategory;
  products: ICategoryProduct[];
}
