export interface ITablePageProps {
  tableBody: any;
  tableHeading: any;
  idName: string;
  hasCheckbox: boolean;
  onAction: any;
}

export type TtableData = Record<string, any>[];
