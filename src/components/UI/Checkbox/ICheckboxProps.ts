export interface ICheckBoxProps {
  checked?: boolean;
  id: string;
  onSelect: (id: string) => void;
  selectAll?: boolean;
}
