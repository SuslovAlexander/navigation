import { ReactNode } from "react";

export interface IModalProps {
  active: boolean;
  setActive: (val: boolean) => void;
  children: ReactNode;
}
