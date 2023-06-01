import { IBrand } from "../../shared/interfaces/IProduct";

export interface IBrandListProps {
  brands: IBrand[];
  onRemove: (id: string) => void;
}
