import { IFormValues } from "../../../../pages/Protocols/ActionProtocol/IActionProtocolProps";

export interface IDropddown {
  name: string;
  options: string[];
}

export interface IFormProps {
  config: Record<string, any>;
  dropdownList: IDropddown[];
  onSetFormValues: (val: string) => void;
  values: IFormValues;
  range?: any
}
