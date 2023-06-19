import { ReactNode } from "react";

export interface IFieldProps {
  title: string;
  children: ReactNode;
  style?: React.CSSProperties;
}
