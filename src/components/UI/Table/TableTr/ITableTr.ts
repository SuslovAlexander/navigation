export interface ITableTrProps {
  data: Record<string, any>;
  onTrClick: (val: string) => void;
  onSelect: (val: string) => void;
  selectedItems: string[];
  used: string[];
}
