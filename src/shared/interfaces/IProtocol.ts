import { ICategory } from "./ICategory";
import { ICategoryProduct } from "./ICategoryProduct";
import { IItem } from "./IItem";
import { IProductProtol } from "./IProductProtocol";

export interface IProtocol {
  id: string;
  name: string;
  description: string;
  isRetailAllowed: boolean;
  brand: IItem;
  protocol_category: ICategory;
  products: ICategoryProduct[] | IProductProtol[];
}
