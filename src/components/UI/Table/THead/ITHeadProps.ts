export interface ITHeadProps {
  tableHeadData: string[];
  onSelectAll?: () => void;
  hasCheckbox: boolean;
  canBeDeleted?: boolean;
  canBeEdit?: boolean;
  tdWidths: string[];
}
