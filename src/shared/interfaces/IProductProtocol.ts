import { IItem } from "./IItem";

export interface IProductProtol {
  id: string;
  name: string;
  isRetailAllowed: boolean;
  brand: IItem;
  images: string[];
}
