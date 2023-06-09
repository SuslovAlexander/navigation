import { ReactNode } from "react";

export interface IAnchorProps {
  color: string;
  children: ReactNode;
  onAnchorClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
