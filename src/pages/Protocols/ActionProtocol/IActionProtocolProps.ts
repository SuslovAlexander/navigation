import { TBearValue } from "../../../shared/types/TBearValue";

export type IFormValues = any;
export interface IActionProtocolProps {
  onAddProtocol: (val: IFormValues) => void;
  onRemoveProducts: TBearValue;
  onEditProtocol: any;
  formData: any;
  products: any;
}
