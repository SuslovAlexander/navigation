import { ReactNode } from "react";

export interface IInputProps {
  variant?: "link";
  type: "password" | "text";
  placeholder?: string;
  disabled?: boolean;
  onInputBlur?: (val: string) => void;
  onInputChange?: (val: string) => void;
  iconImg?: ReactNode;
}
