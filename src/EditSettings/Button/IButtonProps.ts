import { ReactNode } from "react";

export interface IButtonProps {
  isActive: boolean;
  onBtnClick: () => void;
  children: ReactNode;
}
