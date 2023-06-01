import { ReactNode } from "react";

export interface IActionBtnProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
}
