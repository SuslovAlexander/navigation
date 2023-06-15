import { IFormValues } from "../../Protocols/ActionProtocol/IActionProtocolProps";

export interface IActionCodeProps {
  formData: IFormValues;
  onSetFormValue: (val: string) => void;
  onConfirm: () => void;
  onRemove: () => void;
}
