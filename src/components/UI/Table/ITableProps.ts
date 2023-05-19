import { IHeadTable } from "../../../shared/types/IHeadTable";
import { TtableData } from "../../../TablePage/ITablePageProps";

export interface ITableProps {
  heading: IHeadTable;
  selectedItems: string[];
  tableData: TtableData;
  onSelect: (val: string) => void;
  onSelectAll: () => void;
  onTrClick?: (id: string) => void;
  idName: string;
  hasCheckbox: boolean;
}
