import { IBrand } from "./IProduct";

export interface IGood {
  id: string;
  name: string;
  nameFrom1C: string;
  codeFrom1C: string;
  price: number;
  volume: string;
  isReady: boolean;
  isRetailAllowed: boolean;
  brand: IBrand;
  images: string[];
}
