import { ReactNode } from "react";

export interface ITablePageProps {
  tableBody: any;
  features?: any;
  tableHeading: any;
  children?: ReactNode;
  idName: string;
}

export type TtableData = Record<string, any>[];
