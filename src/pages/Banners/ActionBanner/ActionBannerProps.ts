import { IFormValues } from "../../Protocols/ActionProtocol/IActionProtocolProps";

export interface IActionBannerProps {
image: string;
formData: IFormValues;
onSetFormValue: (val: string) => void;
onConfirm: () => void;
onRemove: () => void;
onRemoveImage: () => void;
}
