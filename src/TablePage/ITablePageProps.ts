import { ReactNode } from "react";

export interface ITablePageProps {
  data: any;
  features: any;
  tableHeading: any;
  children?: ReactNode;
  used?: any;
}

export type TtableData = Record<string, any>[];
