import { ReactNode } from "react";

import { IHeadTable } from "../../../shared/interfaces/IHeadTable";
import { TtableData } from "../../../TablePage/ITablePageProps";

export interface ITableProps {
  heading: IHeadTable;
  selectedItems?: Record<string, any>;
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
  tdWidths: string[];
  children?: ReactNode;
}
