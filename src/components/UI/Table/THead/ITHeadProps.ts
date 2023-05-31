import { TtableData } from "../../../../TablePage/ITablePageProps";

export interface ITHeadProps {
  /* tableHeadData: TtableData; */
  tableHeadData: any;
  onSelectAll?: () => void;
  hasCheckbox: boolean;
  canBeDeleted?: boolean;
  canBeEdit?: boolean;
  firsTrWidth?: string;
}
