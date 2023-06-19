import { IProtocol } from "../../../shared/interfaces/IProtocol";
import { TBearValue } from "../../../shared/types/TBearValue";
import { IProduct } from "../../Products/ProductList/IProductListProps";

export type IFormValues = any;
export interface IActionProtocolProps {
  onAddProtocol: (val: IFormValues) => void;
  onRemoveProducts: TBearValue;
  onEditProtocol: (formProtocol: IProtocol) => void;
  formData: IFormValues;
  products: IProduct[];
}
