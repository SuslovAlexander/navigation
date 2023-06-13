export interface ITableTrProps {
  data: Record<string, any>;
  onTrClick?: (val: string) => void;
  onSelect?: (val: string) => void;
  selectedItems?: Record<string, any>;
  idName: string;
  hasCheckbox: boolean;
  canBeDeleted?: boolean;
  canBeEdit?: boolean;
  onRemove?: (id: string) => void;
  onEdit?: (id: string) => void;
}
