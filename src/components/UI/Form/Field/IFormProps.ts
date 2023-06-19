import { IFormValues } from "../../../../pages/Protocols/ActionProtocol/IActionProtocolProps";
import { TBearValue } from "../../../../shared/types/TBearValue";

export interface IDropddown {
  name: string;
  options: string[];
}

export interface IFormProps {
  config: Record<string, any>;
  dropdownList: IDropddown[];
  images?: string[];
  onRemoveImg?: TBearValue;
  onAddImage?: () => void;
  onSetFormValues: (val: string) => void;
  values: IFormValues;
}
