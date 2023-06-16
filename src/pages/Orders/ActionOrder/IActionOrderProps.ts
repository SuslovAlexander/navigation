import { IFormValues } from "../../Protocols/ActionProtocol/IActionProtocolProps";

export interface IActionOrderProps {
  total: number;
  formData: IFormValues;
  onSetFormValues: (val: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
}
