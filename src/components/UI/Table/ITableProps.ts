import { TtableData } from "../../../TablePage/ITablePageProps";

export interface ITableProps {
  selectedItems: string[];
  tableData: TtableData;
  onSelect: any;
  onSelectAll: () => void;
  onTrClick?: (id: string) => void;
  [propName: string]: any;
}
