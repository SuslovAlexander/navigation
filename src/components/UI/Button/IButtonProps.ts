import { ReactNode } from "react";

export interface IButtonProps {
  highlighted?: boolean;
  size?: "static" | "flex";
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
