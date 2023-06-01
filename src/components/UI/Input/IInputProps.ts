import { ReactNode } from "react";

export interface IInputProps {
  type: string;
  isClear?: boolean;
  variant?: "link";
  placeholder?: string;
  disabled?: boolean;
  onInputBlur?: (val: string) => void;
  onChange?: (val: string) => void;
  iconImg?: ReactNode;
  value?: string;
}
