import { ReactNode } from "react";

import { TBearValue } from "../../../shared/types/TBearValue";

export interface IInputProps {
  type: string;
  isClear?: boolean;
  variant?: "link";
  placeholder?: string;
  disabled?: boolean;
  onInputBlur?: TBearValue;
  onChange?: TBearValue;
  iconImg?: ReactNode;
  value?: string;
  onAddImage?: () => void;
}
