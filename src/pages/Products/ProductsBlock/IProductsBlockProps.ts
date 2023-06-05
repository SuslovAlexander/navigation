import { IProduct } from "../ProductList/IProductListProps";

export interface IProductsBlockProps {
  products: IProduct[];
  onClick: () => void;
}
