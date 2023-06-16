export type TtableData = Record<string, any>[] | [];

export interface ITablePageProps {
  tableBody: TtableData;
  tableHeading: string[];
  idName: string;
  hasCheckbox: boolean;
  onAction: (id: string) => void;
}
