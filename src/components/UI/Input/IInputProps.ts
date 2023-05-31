import { ReactNode } from "react";

export interface IInputProps {
  isClear?: boolean;
  variant?: "link";
  type: string;
  placeholder?: string;
  disabled?: boolean;
  onInputBlur?: (val: string) => void;
  onChange?: (val: string) => void;
  iconImg?: ReactNode;
  value?: string;
}
