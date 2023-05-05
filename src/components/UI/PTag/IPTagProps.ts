import { ReactNode } from "react";

export interface IPTagProps {
  size?: "small" | "large";
  color?: string;
  children: ReactNode;
}
