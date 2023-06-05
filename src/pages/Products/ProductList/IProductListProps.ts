import { IBrand } from "../../../shared/interfaces/IProduct";

export type IProduct = {
  id: string;
  name: string;
  isRetailAllowed: boolean;
  brand: IBrand;
  images: string[];
};

export interface IProductListProps {
  products: IProduct[];
  onClick: () => void;
}
