export interface ITableTrProps {
  data: Record<string, any>;
  /* onTrClick: (val: string) => void; */
  onTrClick: any;
  onSelect: (val: string) => void;
  selectedItems: string[];
  idName: string;
  hasCheckbox: boolean; 
}
