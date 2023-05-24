import { IHeadTable } from "../../../shared/types/IHeadTable";
import { TtableData } from "../../../TablePage/ITablePageProps";

export interface ITableProps {
  heading: IHeadTable;
  selectedItems?: string[];
  tableData?: TtableData;
  onSelect?: (val: string) => void;
  onSelectAll?: () => void;
  onTrClick?: (id: string) => void;
  onRemove?: (id: string) => void;
  onEdit?: (id: string) => void;
  idName: string;
  hasCheckbox: boolean;
  canBeDeleted?: boolean;
  canBeEdit?: boolean;
  emptyText: string;
  firsTrWidth?: string;
  children?: any;
}
