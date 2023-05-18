import { TtableData } from "../../../TablePage/ITablePageProps";

export interface ITableProps {
  heading: any;
  selectedItems: string[];
  tableData: TtableData;
  onSelect: any;
  onSelectAll: () => void;
  onTrClick?: (id: string) => void;
  [propName: string]: any;
  idName: string;
}
