import { ReactNode } from "react";

export interface IModalProps {
  active: boolean;
  setActive: (val: boolean) => void;
  align: "center" | "left";
  children: ReactNode;
}
