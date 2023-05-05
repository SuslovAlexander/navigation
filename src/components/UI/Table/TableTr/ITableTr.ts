export interface ITableTrProps {
  data: Record<string, any>;
  onTrClick: () => void;
  onSelect: (val: string) => void;
  selectedItems: string[];
}
